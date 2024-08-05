var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.send('You have successfully created your second app !');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Example app is listening at http://%s:%s', host, port)
})

//Dizon, Abby C.
//WD-302
//August 05, 2024