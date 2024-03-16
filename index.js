const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const products_api = require("./routes/products_api");
const students_api = require("./routes/students_api");
require("./schema/Products");
require("./schema/Student");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(products_api);
app.use(students_api);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// console.log(swaggerSpec);
const port = process.env.PORT || 3000;

const mongoUri = process.env.URL;

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
