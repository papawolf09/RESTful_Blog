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
app.use(express.static("public")); // order to use our custom css
app.use(bodyParser.urlencoded({ extended: true }));

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
// RESTful ROUTES
// ====================
app.get("/", function(req, res) {
  res.redirect("/blogs");
});

// ROUTE 1: INDEX
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("blog", {blogs:blogs});
    }
  });
});
// ROUTE 2: NEW
app.get("/blogs/new", function(req, res) {
  res.render("new");
});
// ROUTE 3: CREATE
app.post("/blogs", function(req, res) {
  //create blog
  Blog.create(req.body.blog, function(err, newBlog) {
    if(err) {
      res.redirect("new");
    } else {
      res.redirect("/blogs");
    }
  });
  //then, redirect to index
});
// ROUTE 4: SHOW
app.get("/blogs:id", function(req, res) {

});
// ROUTE 5: EDIT
app.get("/blogs:id/edit", function(req, res) {

});
// ROUTE 6: UPDATE
app.put("/blogs:id", function(req, res) {

});
// ROUTE 7: DESTROY
app.delete("/blogs:id", function(req, res) {

});

// ====================
// PORT & IP LISTEN
// ====================
app.listen(process.env.PORT || 3000, function() {
  console.log("RESTful Blog begins");
});
