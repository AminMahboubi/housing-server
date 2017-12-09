const express = require('express');
const compression = require('compression')
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const houseRoutes = require('./routes/houseRoutes');

const uri = 'mongodb://dima101:dima101pass@ds135156.mlab.com:35156/housing';

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useMongoClient: true }).then(
  () => {},
  err => { console.error("Error Connecting Mongodb")});


const app = express();
app.use(compression())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.all('/', (req, res) => {
  res.send("API is running!");
});

app.use('/api/house', houseRoutes);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 403;
  next(err);
});

module.exports = app;
