const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({});

module.exports = mongoose.model("DB", dbSchema);
