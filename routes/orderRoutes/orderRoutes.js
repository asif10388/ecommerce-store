import express from "express";
const router = express.Router();

import {
    addOrderItems
} from "../../controllers/orderController.js";

import { protectRoute } from "../../middlewares/authMiddleware.js";

router.route("/").post(protectRoute, addOrderItems)

export default router;
