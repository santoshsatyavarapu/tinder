const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("serveris running");
});

app.listen(3001, () => {
  console.log("severing is running");
});
