require("dotenv").config();
let express = require("express");
let app = express();

const staticPath = __dirname + "/public";

app.use("/public", express.static(staticPath));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  return res.sendFile(path);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: "Hello json".toUpperCase() });
  } else {
    return res.json({ message: "Hello json" });
  }
});

module.exports = app;
