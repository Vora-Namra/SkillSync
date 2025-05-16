"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIInsights = async (industry) => {
  const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "HIGH" | "MEDIUM" | "LOW",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;

  const result = await model.generateContent(prompt); //to prompt the model
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};





export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });
  if (!user) throw new Error("User not found");

  // checking if   user finihed onboarding
  if (!user.industry) {
    throw new Error("Please complete your onboarding (select an industry) first.");
  }

  // If db already have insights, return them
  if (user.industryInsight) {
    return user.industryInsight;
  }

  // Otherwise generate insight & insert it it db
  const insights = await generateAIInsights(user.industry);
  return await db.industryInsight.create({
    data: {
      industry: user.industry,
      salaryRanges: insights.salaryRanges,
      growthRate: insights.growthRate,
      demandLevel: insights.demandLevel.toUpperCase(),
      topSkills: insights.topSkills,
      marketOutlook: insights.marketOutlook.toUpperCase(),
      keyTrends: insights.keyTrends,
      recommendedSkills: insights.recommendedSkills,
      lastUpdated: new Date(),
      nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });
}
