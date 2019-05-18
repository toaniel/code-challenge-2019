const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/distances', function(req, res) {
 const id = req.alg("id");
 return res.send('Diego ' ++ id)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
