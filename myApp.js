require("dotenv").config();
let express = require("express");
let app = express();

const staticPath = __dirname + "/public";

app.use(function middleware(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);

  next();
});

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

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date();
    next();
  },
  function (req, res) {
    let time = req.time;
    return res.json({ time });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  return res.json({ echo: word });
});

module.exports = app;
