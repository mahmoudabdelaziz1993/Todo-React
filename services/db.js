const mongoose = require("mongoose");
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);
module.exports = mongoose;