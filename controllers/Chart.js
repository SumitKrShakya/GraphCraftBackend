const Chart = require("../models/Chart");

exports.allCharts = async (req, res) => {
  try {
    const charts = await Chart.find({ owner: req.user._id, deleted: false });
    res.status(200).json({
      success: true,
      charts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createChart = async (req, res) => {
  try {
    const { data } = req.body;
    const chart = await Chart.create({
      owner: req.user._id,
      data: data,
    });

    res.status(200).json({
      success: true,
      chart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getChart = async (req, res) => {
  try {
    const { id } = req.body;
    const chart = await Chart.findById(id);
    if (!chart) {
      return res.status(404).json({
        success: false,
        message: "Chart not found",
      });
    }
    res.status(200).json({
      success: true,
      chart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateChart = async (req, res) => {
  try {
    const { graph } = req.body;
    console.log("graph", graph);
    const chart = await Chart.findById(graph.chartId);
    if (!chart) {
      return res.status(404).json({
        success: false,
        message: "Chart not found",
      });
    }
    chart.graph = graph;
    await chart.save();
    res.status(200).json({
      success: true,
      chart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
