const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:Carolina84@carolinafernanda.t1riotx.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db;

