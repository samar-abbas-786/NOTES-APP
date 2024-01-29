const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser"); // Add body-parser
const PORT = process.env.PORT || 4000;

const Notes = [
  { text: "HELLO! YOU CAN ADD YOUR NOTES HERE. JUST TYPE AND ADD" },
];

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/", (req, res) => {
  const text = req.body.text;
  Notes.push({ text: text });
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("home", {
    data: Notes,
  });
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
