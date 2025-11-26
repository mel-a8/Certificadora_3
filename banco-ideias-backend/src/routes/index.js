import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as ideaController from "../controllers/ideaController.js";

import {
  isAuthenticated,
  isAdmin,
} from "../middleware/authMiddleware.js";

const router = Router();

// --- User Routes ---
// Only an admin can manage other users
router.get("/users/:userId", isAuthenticated, isAdmin, userController.getUser);
router.put(
  "/users/:userId",
  isAuthenticated,
  isAdmin,
  userController.updateUser
);
router.delete(
  "/users/:userId",
  isAuthenticated,
  isAdmin,
  userController.deleteUser
);
// Note: createUser is now part of your "signup" flow, not a standard API endpoint.
router.post("/signup", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", isAuthenticated, userController.logoutUser);

// --- "Me" Route ---
// A route for a user to get/update their own profile
router.get("/me", isAuthenticated, userController.getMyProfile);
// router.put('/me', isAuthenticated, userController.updateMyProfile);

// --- Idea Routes ---
// Notice the URL no longer has ':userId'. We get it from the token!
router.post("/ideas", isAuthenticated, ideaController.createIdea);
router.get("/ideas", isAuthenticated, ideaController.getMyIdeas);
router.get("/ideas/:ideaId", isAuthenticated, ideaController.getIdea);
router.put("/ideas/:ideaId", isAuthenticated, ideaController.updateIdea);
router.delete("/ideas/:ideaId", isAuthenticated, ideaController.deleteIdea);

// --- Admin Routes ---
// Special routes for admins to see all ideas
router.get(
  "/admin/ideas",
  isAuthenticated,
  isAdmin,
  ideaController.getAllIdeas
);
router.get(
  "/admin/users",
  isAuthenticated,
  isAdmin,
  userController.getAllUsers
);
router.put(
  "/admin/users/:userId/ideas/:ideaId",
  isAuthenticated,
  isAdmin,
  ideaController.updateIdeaByAdmin
);
router.delete(
  "/admin/users/:userId/ideas/:ideaId",
  isAuthenticated,
  isAdmin,
  ideaController.deleteIdeaByAdmin
);

export default router;
