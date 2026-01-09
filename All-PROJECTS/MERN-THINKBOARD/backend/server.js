import express from "express"
// const express = require("express") // do same thing as import

const app = express()

app.listen(5001,()=>{
    console.log("server started on PORT: 5001")
})