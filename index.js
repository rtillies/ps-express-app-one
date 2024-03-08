const express = require('express')
const app = express();
const port = 3000; // usually Windows 3000, Mac 5000

app.listen(port, ()=> {
  console.log(`The server is listening on port ${port}`);
})