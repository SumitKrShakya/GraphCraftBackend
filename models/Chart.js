const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array,
  },
  graph: {
    type: Object,
  },
});

module.exports = mongoose.model("Chart", chartSchema);
