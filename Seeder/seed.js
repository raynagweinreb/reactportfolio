
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/profile', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const projectSeed 