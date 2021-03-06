var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html" );
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is up and running at http://%s:%s", host, port);
})
