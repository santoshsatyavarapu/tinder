const mongoose = require("mongoose");

const connetDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Shepck:m1nVAxGIxSl4FXH0@divtinder.3rz1pii.mongodb.net/divTinder"
  );
};

module.exports = connetDB;
