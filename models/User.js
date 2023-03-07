const mongoose = require("mongoose");
const UserSchema = require("../db/schema/user");

module.exports = mongoose.model("UserModel", UserSchema);
