import express from "express";
const router = express.Router();

import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders
} from "../../controllers/orderController.js";

import { protectRoute } from "../../middlewares/authMiddleware.js";

router.route("/").post(protectRoute, addOrderItems)
router.route('/myorders').get(protectRoute, getMyOrders)
router.route("/:id").get(protectRoute, getOrderById)
router.route("/:id/pay").put(protectRoute, updateOrderToPaid)
export default router;
