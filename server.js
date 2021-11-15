const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send("Hello this is NodeJS Project Done by Rehmat Ali.");
})
const port= process.env.port || 3000;
app.listen(port, () =>{
  console.log("The application is successfully Running");
})