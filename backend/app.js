const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { createTable } = require("./models/index");

const app = express();

const authRouter = require("./routes/auth");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

createTable();

app.use("/auth", authRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    message: "Page not found",
  });
});

module.exports = app;
