const express = require("express");

const connetDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Santosh",
    lastName: "Satyavarapu",
    emailId: "santoshsatyavarapu123@gmail.com",
    age: 25,
    password: "Shepck#890",
    gender: "Male",
  };
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }

  res.send("Data Send");
});

connetDB()
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("severing is running");
    });
  })
  .catch((err) => {
    console.error("Database Not Connected");
  });
