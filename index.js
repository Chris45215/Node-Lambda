const http = require('http');

const port = 3000;

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(port, () => console.log('Server running on port 3000'))