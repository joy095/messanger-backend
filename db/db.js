const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connted to db");
  } catch (error) {
    handleError(error);
  }
};

module.exports = conn;
