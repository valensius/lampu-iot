// npm init
// npm install express --s

// node server.js

// panggil si express
const express = require("express")
const app = express()

// variabel lampu global
let lampu_global = 0
let port = process.env.PORT || 3000 //

app.listen(port,function(){
    console.log("Server is running")
})

app.get("/:lampu",function(req,res){
    lampu_global = req.params.lampu
    res.redirect("/")
})

app.get("/",function(req,res){
    res.send({
        lampu:lampu_global
    })
})

app.get("/data",function(req,res){
    res.send({
        lampu:lampu
    })
})

app.get("/data/:tmp/:tekanan",function(req,res){
    let data_suhu = req.params.tmp
    let data_tekanan = req.params.tekanan
    res.send({
        suhu:data_suhu,
        tekanan:data_tekanan
    })
})
