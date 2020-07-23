const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This application is hosted on Heroku!");
});

app.listen(process.env.PORT || 3000, () => console.log("Server started!"));
