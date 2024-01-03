const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()

app.use(express.json())


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("data base connect");
  })
  .catch(() => {
    console.log("connection failed");
  });

  app.listen(5000,()=>{
    console.log('Server is Running on port 5000');
  })