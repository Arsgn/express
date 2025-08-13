import { Request, response, Response } from "express";
import prisma from "../../plugins/prisma";

const getTodos = async (req: Request, res: Response) => {
  try {
    const data = await prisma.todo.findMany();
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log(e);

    response.status(500).send({
      success: false,
      message: `error in getTodos: ${e}`,
    });
  }
};

const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await prisma.todo.findFirst({
      where: {
        id: +id,
      },
    });

    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: `error in getTodoById: ${e}`,
    });
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const data = await prisma.todo.create({
      data: {
        title: title,
        description: description,
      },
    });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    console.error(`error in getTodos: ${e}`);
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const data = await prisma.todo.update({
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
  } catch (e) {
    console.error(`error in getTodos: ${e}`);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.todo.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: `error in getTodos: ${e}`,
    });
  }
};

export default { getTodos, getTodoById, createTodo, deleteTodo, updateTodo };
