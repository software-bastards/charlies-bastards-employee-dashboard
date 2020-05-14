if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//DEPENDECIES
const path = require("path");
const http = require("http");
const createError = require("http-errors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const fileUpload = require("express-fileupload");

//Routes
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
const editHours = require("./routes/editHours");
const uploadImage = require("./routes/uploadImage");
const displayhoursRouter = require("./routes/displayhours");
const inserthoursRouter = require("./routes/insert");

//configurations
const db = require("./database/configurationSequelize");
require("./Configurations/helper/passportConfig")(passport);
db.connector.sync();

app.use(express.static("public"));
app.use(fileUpload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(cors());
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", dashboardRouter);
app.use("/", editHours);
app.use("/", uploadImage);
app.use("/", displayhoursRouter);
app.use("/", inserthoursRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Connecting sockets to the server and adding them to the request

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err.message);
  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
