var path = require('path');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test',(req,res) => {
  console.log("message");
  });

app.listen(process.env.PORT || 3000, function(){
    console.log("App listening");
  })
  
  module.exports = app;