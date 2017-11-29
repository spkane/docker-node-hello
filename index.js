const express = require('express');

// Constants
const DEFAULT_PORT = 8080;
const DEFAULT_WHO = "World";
const PORT = process.env.PORT || DEFAULT_PORT;
const WHO = process.env.WHO || DEFAULT_WHO;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello ' + WHO + '. Wish you were here.\n');
});

app.listen(PORT, () => console.log('Running on http://localhost:' + PORT));
