import { useState } from "react";
import { toast } from "sonner";

export const useFetch=(cb)=>{
    const [data, setData] = useState(undefined); // holds whatever your callback cb returns on success.
    
    const [loading, setLoading] = useState(null);//used to indicate progress
    
    const [error, setError]  = useState(null);//holds errors

    const fn = async(...args)=>{
        setLoading(true);
        setError(null);
        try{
            const res = await cb(...args);
            setData(res);
            setError(null);
        }catch(err){
            setError(err);
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }
    return {data,loading,error,fn,setData};
}