var express = require('express');
var app = express();



app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function(){
    console.log("Server running at http://locahost:3000")
});

//Dizon, Abby C.
//WD-302
//August 05, 2024