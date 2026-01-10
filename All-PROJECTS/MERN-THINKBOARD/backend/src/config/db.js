import moongose from "mongoose"


export const connectDB = async()=>{
    try{
        await moongose.connect(process.env.MONGO_URI)
       console.log("connected")
    }catch(err){
        console.log(err)
        process.exit(1) //exit with failure //0 means success
    }
}