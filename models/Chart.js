const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "Untitled chart",
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
  customization: {
    type: Object,
  },
  chartType: {
    type: String,
  },
  hideCustomization: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Chart", chartSchema);
