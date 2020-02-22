var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 4000;

bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(port, function() {
  console.log("RESTful Blog begins");
});
