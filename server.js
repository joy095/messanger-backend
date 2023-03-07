const express = require("express");
require("dotenv").config();
const cors = require("cors");
const conn = require("./db/db");
const router = express.Router();
const userRoute = require("./controller/User.routes");

const port = process.env.PORT;
const app = express();

conn();
router.use("/", userRoute);

app.use(cors);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
