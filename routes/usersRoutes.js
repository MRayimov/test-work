import express from "express";
import * as authController from "../Controllers/authController.js";
const router = express.Router();

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.signIn);
// .post(productsController.createProduct);

// router
//   .route("/:id")
//   .patch(productsController.updateProduct)
//   .delete(productsController.deleteProduct)
//   .get(productsController.getProduct);
export default router;
