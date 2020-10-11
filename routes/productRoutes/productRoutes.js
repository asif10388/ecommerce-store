import express from "express";

import {
  getProducts,
  getProductById,
} from "../../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);

router.get("/:id", getProductById);

export default router;
