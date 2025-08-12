import { Request, Response } from "express";
import prisma from "../../plugins/prisma";

const getTodos = async (req: Request, res: Response) => {
  try {
    const data = await prisma.todo.findMany();
    res.status(200).send({
        success: true,
        data: data,
    })
  } catch (e) {
    console.log(`error in getTodos: ${e}`);
  }

};

export default { getTodos };
