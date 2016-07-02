var express = require('express');
var fs = require('fs');
var path = require('path');


var app = express();
app.set('views', __dirname + '/');
app.use(express.static(__dirname));


app.listen(process.env.PORT);