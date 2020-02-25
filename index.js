
var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// ====================
// APP CONFIG
// ====================

mongoose.connect("mongodb://localhost/restful_blog_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.set("view engine", "ejs");
app.use(express.static("public")); // can use our custom css
app.use(bodyParser.urlencoded({ extended: false }));

// ====================
// DB CONFIG - Schema, Model
// ====================

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "SMART goal setting",
//   image: "https://croi.ie/wp-content/uploads/2018/05/smart-goals-1024x483.png",
//   body: "Specific, Measurable, Achievable, Relavent, Time-bound",
// });


// ====================
//
// ====================

// ====================
// 7 RESTful ROUTES
// ====================
app.get("/", function(req, res) {
  res.redirect("blog");
});

// ROUTE 1: INDEX
app.get("/blog", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("blog", {blogs:blogs});
    }
  });
});
// ROUTE 2: NEW
app.get("/blog/new", function(req, res) {

});
// ROUTE 3: CREATE
app.post("/blog", function(req, res) {

});
// ROUTE 4: SHOW not VIEW
app.get("/blog:id", function(req, res) {

});
// ROUTE 5: EDIT
app.get("/blog:id/edit", function(req, res) {

});
// ROUTE 6: UPDATE
app.put("/blog:id", function(req, res) {

});
// ROUTE 7: DESTROY
app.delete("/blog:id", function(req, res) {

});

// LISTEN
app.listen(process.env.PORT || 3000, function() {
  console.log("RESTful Blog begins");
});
