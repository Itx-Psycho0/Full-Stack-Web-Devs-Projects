import express from "express"
// const express = require("express") // do same thing as import

const app = express()

app.get("/api/notes",(req,res)=>{
    res.status(200).send("You got 10 notes")
})
app.post("/api/notes",(req, res)=>{
    res.status(201).send("Your note has created")
})
app.listen(5001,()=>{
    console.log("server started on PORT: 5001")
})