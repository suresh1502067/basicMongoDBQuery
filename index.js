const express = require('express');
const Route = require('./src/route');
const mongoose = require('mongoose');

const app= express();
const port =3001;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',Route)

const uri='mongodb://localhost:27017/testDB'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.once('open',function(){
    console.log("db opened successfully")
})

let getNumber=Array.from(Array(10).keys())
let arrayOfNum=getNumber.map((data,i)=>retrun {name:`${}`}
)

app.listen(port,()=>{
    console.log("listened successfully",port)
})

