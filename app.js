import express from "express";
import categoiresRoutes from "./routes/categoriesRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Work Project",
      version: "1.0.0",
    },
    servers: [{ url: "https://test-work-kq8f.onrender.com/" }],
  },
  apis: [`${join(__dirname, "routes", "*.js")}`],
};
console.log(`${join(__dirname, "routes", "*.js")}`);

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

/**
 * @swagger
 * /:
 *  get:
 *      summary: Welcome to server
 *      description: welcome
 *      responses:
 *          200:
 *              description: hello
 *
 */

app.get("/", (req, res) => {
  res.send("Welcome to server!");
});

app.use("/categories", categoiresRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

export default app;
