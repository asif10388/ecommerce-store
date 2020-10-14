import express from "express";

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from "../../controllers/userController.js";

import { protectRoute, adminRoute } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protectRoute, adminRoute, getUsers)
router.post("/login", authUser);
router.post("/register", registerUser);
router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router.route("/:id")
  .delete(protectRoute, adminRoute, deleteUser)
  .get(protectRoute, adminRoute, getUserById)
  .put(protectRoute, adminRoute, updateUser)

export default router;
