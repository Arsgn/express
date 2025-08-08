"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [];
const getAllTodo = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error(`Error in getAllTodo: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in getAllTodo: ${e}`,
        });
    }
};
const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            res.status(400).send({
                success: false,
                message: "Title is required",
            });
            return;
        }
        const newTodo = {
            id: data.length + 1,
            title,
            description: description || "",
            completed: false,
        };
        data.push(newTodo);
        res.status(201).send({
            success: true,
            data: newTodo,
        });
    }
    catch (e) {
        console.error(`Error in addTodo: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in addTodo: ${e}`,
        });
    }
};
exports.default = {
    getAllTodo,
    addTodo,
};
