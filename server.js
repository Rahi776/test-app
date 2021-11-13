const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('my name is Rehmat Ali')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})