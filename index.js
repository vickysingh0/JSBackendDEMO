require('dotenv').config()
// import express from "express"
const express = require('express')
//through this variable which we get the different functions of express
const app = express()
// using virtual port server listen 4000,4999,2344,etc upto 65,532(check over internet)
const port = 5000
// this port is not available on user pc so we install "dotenv" for production level




// app using get request(req) the server to listen to home directory(/) and call back to resource(res)
app.get('/', (req, res) => {
    // responce(res) to request(req) =to callback
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter.com")
})

app.get('/linkdin',(req,res)=>{
    res.send("<h1>vickysinghLinkdin<h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})