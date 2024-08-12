import express from "express";
import { UserController } from "../controllers/UserController";
import { Auth } from "../middleware";
const router = express.Router();

router.get("/list", Auth, UserController.GetUserList);
router.post("/", Auth, UserController.CreateUser);
router.delete("/:id", Auth, UserController.DeleteUser);
router.put("/:id", Auth, UserController.EditUser);

export default router;
