import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getAllOrders,
} from "../../controllers/orderController.js";

import { protectRoute, adminRoute } from "../../middlewares/authMiddleware.js";

router
  .route("/")
  .post(protectRoute, addOrderItems)
  .get(protectRoute, adminRoute, getAllOrders);
router.route("/myorders").get(protectRoute, getMyOrders);
router.route("/:id").get(protectRoute, getOrderById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(protectRoute, adminRoute, updateOrderToDelivered);
export default router;
