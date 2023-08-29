const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/user", require("./routes/User"));
app.use("/chart", require("./routes/Chart"));

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log(`listening on port ${4000}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
