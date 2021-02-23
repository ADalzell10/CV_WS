const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/home", function (req, res) {
    res.render("cv_home");
});

app.get("/", function (req, res) {
    res.render("cv_home");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("*", function (req, res) {
    res.send("404 Page not found");
})

app.listen(3000, function () {
    console.log("Serving on port 3000.");
})