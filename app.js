var express = require("express");
var todoController = require("./controllers/todoController");

var app = express();

var PORT = 3000;

// Setup template engine
app.set("view engine", "ejs");

// Serving static files
app.use(express.static("./public"));

todoController(app);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
