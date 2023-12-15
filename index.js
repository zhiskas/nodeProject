const express = require("express");
const mongoose = require("mongoose");
const sample_api = require("./routes/route");

require("./schema/Products");

const app = express();

app.use(express.json());
app.use(sample_api);

const port = process.env.PORT || 3000;

const mongoUri =
  "mongodb+srv://Zisiskats:shitheadshithead@zhiskas.uqttaxw.mongodb.net/?retryWrites=true&w=majority/students";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to local Mongo");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to local Mongo:", err);
});

app.listen(port, () => {
  console.log(`Track-Server listening on port ${port}`);
});
