import express from "express";
import * as productsController from "../Controllers/productsController.js";
import { protect } from "../Controllers/authController.js";
const router = express.Router();

router
  .route("/")
  .get(productsController.getAllProducts)
  .post(protect, productsController.createProduct);

router
  .route("/:id")
  .patch(protect, productsController.updateProduct)
  .delete(protect, productsController.deleteProduct)
  .get(productsController.getProduct);
export default router;
