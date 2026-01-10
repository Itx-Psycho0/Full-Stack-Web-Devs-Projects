import express from "express"
import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
dotenv.config();
// const express = require("express") // do same thing as import

const app = express()
const PORT = process.env.PORT || 5001
connectDB();
app.use("/api/notes",notesRoutes)
app.listen(PORT,()=>{
    console.log("server started on PORT: 5001")
})