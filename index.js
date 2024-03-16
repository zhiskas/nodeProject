const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const sample_api = require("./routes/route");

require("./schema/Products");
require("./schema/Student");

const app = express();

app.use(express.json());
app.use(sample_api);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// console.log(swaggerSpec);
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
  // import("open").then((open) => {
  //   open.default("http://localhost:3001/api-docs");
  // });
});

// Handle server shutdown
// process.on("SIGINT", () => {
//   server.close(() => {
//     console.log("Server closed");
//     process.exit(0);
//   });
// });
