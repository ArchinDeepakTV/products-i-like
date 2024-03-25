var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Welcome to Things I like");
});

app.listen(5000, function () {
  console.log("App is listening on port 5000!");
});
