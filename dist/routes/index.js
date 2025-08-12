"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_routes_1 = __importDefault(require("../modules/todo/todo.routes"));
const todo_prisma_routes_1 = __importDefault(require("../modules/todo-prisma/todo-prisma.routes"));
const cors_1 = __importDefault(require("cors"));
const configCors = {
    origin: [
        "http://localhost:3000"
    ],
};
const router = (0, express_1.Router)();
router.use("/todo", (0, cors_1.default)(configCors), todo_routes_1.default);
router.use("/todo-prisma", (0, cors_1.default)(configCors), todo_prisma_routes_1.default);
exports.default = router;
