const UserModel = require("../models/User");
const express = require("express");
const router = express.Router();

exports.addUser("/adduser", (req, res) => {
  let user = new UserModel(req.body);
  user
    .save()
    .then(() => {
      res.status(201).json({ user: "User Added Successfully" });
    })
    .catch((err) => {
      res.status(400).setDefaultEncoding("Something Went Wrong");
    });
});

exports.getUser("/getuser", (req, res) => {
  res.send("user");
});

// module.exports = router;
