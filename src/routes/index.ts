import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes";
import cors from 'cors'

const configCors = {
    origin: [
        "http://localhost:3000"
    ],
};

const router = Router();

router.use("/todo", cors(configCors), todoRoutes);

export default router;
