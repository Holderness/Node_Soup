
var express = require('express');
var app = express();


/**
*  Serve static assets out of public
*/
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Server is running on port %d', 3000);
});

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});