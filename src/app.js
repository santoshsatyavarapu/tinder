const express = require("express");

const app = express();




app.get("/santosh", (req, res) => {
  res.send({name:"santosh",age:25});
});

app.post("/santosh", (req, res) => {
  res.send("Deatils Uploaded");
});

app.delete("/santosh", (req, res) => {
  res.send("Deatils removed");
});

app.use((req, res) => {
  res.send("serveris running");
});






app.listen(3001, () => {
  console.log("severing is running");
});
