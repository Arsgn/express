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
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todoIndex = data.findIndex((todo) => todo.id === +id);
        data.splice(todoIndex, 1);
        res.status(200).send({
            status: true,
            success: true,
            message: "Todo deleted successfully"
        });
    }
    catch (error) {
        console.error(`error in deleteTodo ${error}`);
        res.status(500).send({
            success: true,
            message: `error in deleteTodo${error}`
        });
    }
};
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todoIndex = data.findIndex((todo) => todo.id === +id);
        if (todoIndex === -1) {
            return res.status(404).send({
                status: false,
                success: false,
                message: "Todo not found"
            });
        }
        data[todoIndex] = { ...data[todoIndex], ...req.body };
        res.status(200).send({
            status: true,
            success: true,
            message: "Todo updated successfully",
            data: data[todoIndex]
        });
    }
    catch (error) {
        console.error(`error in updateTodo ${error}`);
        res.status(500).send({
            success: false,
            message: `error in updateTodo ${error}`
        });
    }
};
exports.default = {
    getAllTodo,
    addTodo,
    deleteTodo,
    updateTodo,
};
