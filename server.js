const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send("My Name is Rehmat Ali.This is my node-application");
})
const port= process.env.port || 3000;
app.listen(port, () =>{
  console.log("The application is successfully Running");
})