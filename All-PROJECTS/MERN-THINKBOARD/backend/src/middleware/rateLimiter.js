import {rateLimiter} from "../config/upstash.js";

const rateLimit = async(req,res,next)=>{
    try{
        const {success} = await rateLimiter.limit(req.ip)
        if(!success){
            return res.status(429).json({message:"Too many requests"})
        }
        next()
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
}

export default rateLimit;