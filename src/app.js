const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("서버가 시작되었습니다.");
});
