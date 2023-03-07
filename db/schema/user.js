const mongoose = require("mongoose");

const createUser = new mongoose.Schema(
  {
    name: {
      String,
      // required: true
    },

    email: {
      String,
      // required: true,
      // trim: true,
      // unique: true,
    },
    passwod: {
      String,
      // required: true,
      // min: [8, "Password should contain at least Eight characters!"],
    },
  }
  // { timestamps: true }
);

module.exports = ("UserSchema", createUser);
