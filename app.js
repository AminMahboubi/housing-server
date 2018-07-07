const express = require("express");
const compression = require("compression");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const houseRoutes = require("./routes/houseRoutes");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useMongoClient: true }
  )
  .then(() => {}, (err) => console.error(err));

const app = express();
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("/", (req, res) => res.send("API is running!"));
app.use("/api/house", houseRoutes);

app.use((req, res) => res.status(404).send({ url: req.originalUrl + " not found" }));

module.exports = app;
