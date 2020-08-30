const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
})

app.listen(port, () => {
  console.log(`app started on http://localhost:${port}`);
})