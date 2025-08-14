import { Request, Response } from "express";
import prisma from "../../plugins/prisma";

const singUpUser = async (req: Request, res: Response) => {
  try {
    const { login, password, fullName, age } = req.body;
    const data = await prisma.user.create({
      data: {
        login: login,
        password: password,
        fullName: fullName,
        age: age,
      },
    });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: `error in singUpUser: ${e}`,
    });
  }
};

const singInUser = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    if (!login && !password) {
      res.status(401).send({
        success: false,
        message: "Неверный логин или пароль",
      });
      return;
    }

    const data = await prisma.user.findFirst({
      where: {
        login: login,
        password: password,
      },
    });

    if (!data) {
      res.status(401).send({
        success: false,
        masssage: "password and login isprav",
      });
    }
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    console.error(`error in getTodos: ${e}`);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.user.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log(e);

    res.status(500).send({
      success: false,
      message: `error in getTodos: ${e}`,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fullName, age } = req.body;
    const data = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        fullName: fullName,
        age: age,
      },
    });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    res.status(404).send({
      success: true,
      massaage: `update ${e} ` ,
    });
  }
};

export default { singUpUser, singInUser, getUserById, updateUser };
