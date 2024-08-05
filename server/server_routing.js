var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('There is GET request for the homepage!');
    res.send('Here is the GET Method');
})

app.post('/', function(req, res) {
    console.log('There is POST request for the homepage is accessed.');
    res.send('Here is the POST Method');
})


app.get('/list_user', function(req, res) {
    console.log('Got a GET request for /list_user');
    res.send('This is Page Listing');
})

app.get('/abby', function(req, res) {
    console.log('Got a GET request for /abby');
    res.send(`
    <html style = background-color:#d6aed7>
        <h1 style = 'font-size:50px'>This is Abby Cruz Dizon</h1>
    </html>
    `);
})

app.get('/ab*cd', function(req, res) {
    console.log('got a GET request for /ab*cd');
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port
    
    console.log('Example app listening at http://%s:%d', host, port)

});

//Dizon, Abby C.
//WD-302
//August 05, 2024