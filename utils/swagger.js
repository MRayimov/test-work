import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My Api",
    description: "Description",
  },
  host: "localhost:4100",
};
const outputFile = "./swagger-output.json";
const routes = ["../app.js"];

swaggerAutogen()(outputFile, routes, doc);
