import express from "express";
import { Auth } from "../middleware";
import { AuthController } from "../controllers/AuthController";
const router = express.Router();

router.post("/user-login", AuthController.UserLogin);
router.post("/user-register", AuthController.UserRegister);
router.get("/current-user", Auth, AuthController.GetCurrentUser);

export default router;
