const mongoose = require("mongoose");

const DB = async () => {
  const url = process.env.MONGODB_URL;
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected");
    })
    .catch((err) => console.log("Error in mongodb connection"));
};
module.exports = DB;
