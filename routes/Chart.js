const express = require("express");
const {
  allCharts,
  createChart,
  getChart,
  updateChart,
} = require("../controllers/Chart");
const { isAuthenticated } = require("../middlewares/User");
const router = express.Router();

router.route("/create").post(isAuthenticated, createChart);
router.route("/all").post(isAuthenticated, allCharts);
router.route("/getchart").post(isAuthenticated, getChart);
router.route("/update").post(isAuthenticated, updateChart);

module.exports = router;
