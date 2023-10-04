const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/me", (req, res) => {
  res.send("Ajinkya");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code ☕</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to Chai</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
