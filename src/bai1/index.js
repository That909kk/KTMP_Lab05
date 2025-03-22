const express = require('express');
const app = express();


app.use(express.json({ extended: true }));
app.use(express.static("./views"));
app.set("view engine", "ejs");
app.set("views", "./views");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
