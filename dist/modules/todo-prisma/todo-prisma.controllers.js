"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../plugins/prisma"));
const getTodos = async (req, res) => {
    try {
        const data = await prisma_1.default.todo.findMany();
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        express_1.response.status(500).send({
            success: false,
            message: `error in getTodos: ${e}`,
        });
    }
};
const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma_1.default.todo.findFirst({
            where: {
                id: +id,
            },
        });
        res.status(200).send({
            success: true,
            data,
        });
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: `error in getTodoById: ${e}`,
        });
    }
};
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = await prisma_1.default.todo.create({
            data: {
                title: title,
                description: description,
            },
        });
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error(`error in getTodos: ${e}`);
    }
};
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const data = await prisma_1.default.todo.update({
            where: {
                id: +id,
            },
            data: {
                title: title,
                description: description,
            },
        });
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error(`error in getTodos: ${e}`);
    }
};
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma_1.default.todo.delete({
            where: {
                id: +id,
            },
        });
        res.status(200).send({
            success: true,
            data,
        });
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: `error in getTodos: ${e}`,
        });
    }
};
exports.default = { getTodos, getTodoById, createTodo, deleteTodo, updateTodo };
