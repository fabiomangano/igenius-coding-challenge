const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Ok')
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});