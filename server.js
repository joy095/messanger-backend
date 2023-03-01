const express = require("express");
require("dotenv").config();
const router = require("./routes/route");
const conn = require("./db/db");

const port = process.env.PORT;
const app = express();

conn();

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
