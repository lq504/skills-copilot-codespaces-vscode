// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set port
var port = process.env.PORT || 8080;

// Set view engine
app.set('view engine', 'ejs');

// Set static files
app.use(express.static(__dirname + '/public'));

// Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array comments
var comments = [
  {
    name: 'John Doe',
    email: '