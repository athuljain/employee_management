const express =require('express')
const bodyparser=require('body-parser')

const app=express()

const hr=require('../controller/Hr')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.post('/login',hr.hrLogin)


module.exports=app