let express = require("express");
let app = express();

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  return res.sendFile(path);
});

module.exports = app;
