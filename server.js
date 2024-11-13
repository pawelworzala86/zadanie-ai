import fs from 'fs'
import express from 'express'
const app = express()

app.use(express.static("public"))

app.get('/', function (req, res) {
  res.send(fs.readFileSync('./podglad.html').toString())
})

app.listen(3000)