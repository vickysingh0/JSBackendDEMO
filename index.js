require('dotenv').config()
// import express from "express"
const express = require('express')
//through this variable which we get the different functions of express
const app = express()
// using virtual port server listen 4000,4999,2344,etc upto 65,532(check over internet)
const port = 5000
// this port is not available on user pc so we install "dotenv" for production level

const githubdata={
  "login": "vickysingh0",
  "id": 34959983,
  "node_id": "MDQ6VXNlcjM0OTU5OTgz",
  "avatar_url": "https://avatars.githubusercontent.com/u/34959983?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vickysingh0",
  "html_url": "https://github.com/vickysingh0",
  "followers_url": "https://api.github.com/users/vickysingh0/followers",
  "following_url": "https://api.github.com/users/vickysingh0/following{/other_user}",
  "gists_url": "https://api.github.com/users/vickysingh0/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vickysingh0/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vickysingh0/subscriptions",
  "organizations_url": "https://api.github.com/users/vickysingh0/orgs",
  "repos_url": "https://api.github.com/users/vickysingh0/repos",
  "events_url": "https://api.github.com/users/vickysingh0/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vickysingh0/received_events",
  "type": "User",
  "site_admin": false,
  "name": "vikram singh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": "I'm very much interested in getting a bright future in IT technology as a Full Stack Web developer.",
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2017-12-30T11:34:45Z",
  "updated_at": "2023-12-07T02:24:56Z"
}


// app using get request(req) the server to listen to home directory(/) and call back to resource(res)
app.get('/', (req, res) => {
    // responce(res) to request(req) =to callback
  res.send('Hello JS!')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter.com")
})

app.get('/linkdin',(req,res)=>{
    res.send("<h1>vickysinghLinkdin<h1>")
})


app.get('/gitdata',(req,res)=>{
  res.json(githubdata)
})




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
