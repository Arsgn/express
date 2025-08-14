import { Router } from "express";
import userControllers from "./user.controllers";

const router = Router();


router.get("/get/:id", userControllers.getUserById);
router.post("/sing-up", userControllers.singUpUser);
router.post("/sing-in", userControllers.singInUser);
router.patch("/update/:id", userControllers.updateUser);

export default router;