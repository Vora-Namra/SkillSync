"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

/**
 * Turn AI’s “High”/“Medium”/“Low” into your Prisma enum.
 */
function normalizeDemandLevel(raw) {
  if (!raw) return undefined;
  const up = raw.toUpperCase();
  if (["HIGH", "MEDIUM", "LOW"].includes(up)) return up;
  throw new Error(`Unexpected demandLevel from AI: ${raw}`);
}

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  try {
    const { updatedUser, industryInsight } = await db.$transaction(
      async (tx) => {
        // 1) Try find existing insight
        let industryInsight = await tx.industryInsight.findUnique({
          where: { industry: data.industry },
        });

        // 2) If missing, generate and create it
        if (!industryInsight) {
          const raw = await generateAIInsights(data.industry);

          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: raw.salaryRanges,
              growthRate: raw.growthRate,
              demandLevel: normalizeDemandLevel(raw.demandLevel),
              topSkills: raw.topSkills,
              marketOutlook: raw.marketOutlook.toUpperCase(),
              keyTrends: raw.keyTrends,
              recommendedSkills: raw.recommendedSkills,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        // 3) Update the user profile
        const updatedUser = await tx.user.update({
          where: { id: user.id },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      { timeout: 10000 }
    );

    return { success: true, updatedUser, industryInsight };
  } catch (err) {
    console.error("updateUser error:", err);
    throw err;
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });

  return { isOnboarded: Boolean(user?.industry), industry: user?.industry };
}
