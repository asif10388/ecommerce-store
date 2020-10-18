import express from "express";

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopRatedProducts,
} from "../../controllers/productController.js";

import { protectRoute, adminRoute } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(protectRoute, adminRoute, createProduct);

router.route("/toprated").get(getTopRatedProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protectRoute, adminRoute, deleteProduct)
  .put(protectRoute, adminRoute, updateProduct);

router.route("/:id/reviews").post(protectRoute, createProductReview);

export default router;
