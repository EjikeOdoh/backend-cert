let express = require("express");
let app = express();

const staticPath = __dirname + "/public";

app.use("/public", express.static(staticPath));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  return res.sendFile(path);
});

module.exports = app;
