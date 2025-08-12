import { Router } from "express";
import todoPrismaControllers from "./todo-prisma.controllers";

const router = Router();

router.get("/get-all", todoPrismaControllers.getTodos);

export default router;