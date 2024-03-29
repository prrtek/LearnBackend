require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Logged In");
});

app.get("/hello", (req, res) => {
  res.send(
    '<h1 style="color: blue; font-size: 50px; text-align: center;">Hellowwwww</h1>'
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//after changing code always restart the server
