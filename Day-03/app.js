const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res)=>{
    res.send("welcome to express js");
    res.end();
})

app.get('/Mastanvali', (req,res)=>{
    res.send("welcome to Mr Mastanvali");
    res.end();
})

app.get('/Rehan', (req,res)=>{
    res.send("welcome to Mr Rehan1");
    res.end();
})
app.listen(port,()=>{console.log(`server is running on this ${port} number`);})