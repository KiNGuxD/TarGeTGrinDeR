const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`L O A D I N G  . . . `));
app.all("/", (req, res) => {
  res.send('RUNNING DINO PROJECT !!')
})
