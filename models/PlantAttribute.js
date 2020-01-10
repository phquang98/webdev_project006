const mongoose = require("mongoose");

// Create a schema - how a post should look like (a description)
const PlantAttriSchema = mongoose.Schema({
  temp: {
    type: String,
    required: true
  },
  light: {
    type: String,
    required: true
  },
  humidity: {
    type: String,
    required: true
  },
  tvoc: {
    type: String,
    required: true
  },
  water: {
    type: String,
    required: true
  },
  co2: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  childnodeid: {
    type: String,
    required: true
  }
});

// 1st arg show up on Mongo Atlas, 2nd arg will give the 1st arg the schema that it should use
module.exports = mongoose.model("PlantAttri", PlantAttriSchema);
