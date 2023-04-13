const express = require('express');
const app=express();
const mongodb =require('mongodb')
const cors = require('cors');
const db = require('./mongoconnection');
app.use(cors());



app.post('/',async (req,res)=>{
  let data= await db
  req.setEncoding(req.body)
})
let resullt=await data.insert(req.body)
res.send(resullt)




app.listen(8000)