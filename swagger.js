const swaggerJsdoc = require("swagger-jsdoc");

// Swagger definition
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
  },
  components: {},
  apis: ["./routes/*.js"], // files containing annotations as above
};

// Initialize swaggerJSDoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
