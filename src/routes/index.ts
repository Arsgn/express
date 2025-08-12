import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes";
import todoPrismaRoutes from "../modules/todo-prisma/todo-prisma.routes";
import cors from 'cors'

const configCors = {
    origin: [
        "http://localhost:3000"
    ],
};

const router = Router();

router.use("/todo", cors(configCors), todoRoutes);
router.use("/todo-prisma", cors(configCors), todoPrismaRoutes);

export default router;
