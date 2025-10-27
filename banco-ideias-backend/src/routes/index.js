import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as ideaController from "../controllers/ideaController.js";

const router = Router();

// --- User Routes ---
router.post("/users", userController.createUser);
router.get("/users/:userId", userController.getUser);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

// --- Idea Routes (nested under users) ---
router.post("/users/:userId/ideas", ideaController.createIdea);
router.get("/users/:userId/ideas", ideaController.getAllIdeasForUser);
router.get("/users/:userId/ideas/:ideaId", ideaController.getIdea);
router.put("/users/:userId/ideas/:ideaId", ideaController.updateIdea);
router.delete("/users/:userId/ideas/:ideaId", ideaController.deleteIdea);

export default router;
