require("dotenv").config();
let express = require("express");
let app = express();

function simpleLogger(req, res, next) {
  console.log(req.method, req.path, req.ip);
  next();
}

const staticPath = __dirname + "/public";

app.use(simpleLogger);

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
