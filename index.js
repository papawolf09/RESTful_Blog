var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs");


// ====================
//
// ====================

// ====================
// 7 RESTful ROUTES
// ====================
app.get("/", function(req, res) {
  res.redirect("post");
});

// ROUTE 1: INDEX
app.get("/post", function(req, res) {
  res.render("post");
});
// ROUTE 2: NEW
app.get("/post/new", function(req, res) {

});
// ROUTE 3: CREATE
app.post("/post", function(req, res) {

});
// ROUTE 4: SHOW not VIEW
app.get("/post:id", function(req, res) {

});
// ROUTE 5: EDIT
app.get("/post:id/edit", function(req, res) {

});
// ROUTE 6: UPDATE
app.put("/post:id", function(req, res) {

});
// ROUTE 7: DESTROY
app.delete("/post:id", function(req, res) {

});

// LISTEN
app.listen(process.env.PORT || 3000, function() {
  console.log("RESTful Blog begins");
});
