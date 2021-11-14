const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send("My Name is Rehmat Ali.This is my node-application");
})

app.listen(3000, () =>{
  console.log("The application is successfully Running");
})