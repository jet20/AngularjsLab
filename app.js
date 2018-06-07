var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/lib', express.static('lib'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.listen(3000, function () {
  console.log('url: http://localhost:3000');
});
