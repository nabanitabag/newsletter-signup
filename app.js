const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.listen(3000,function() {
  console.log("running on 3000");
})
