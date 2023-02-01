import { Request, Response } from "express";
import { IUser } from "../interfaces";
import UserService from "../services/UserService";

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async getAllUsers(req: Request, res: Response) {
    const users: Array<IUser> = await this.service.getUsers();
    res.status(200).json(users);
  }
};

/* Forma funcional

const getAllUser = async (req: Request, res: Response) => {
  const service = new UserService();
  const users: Array<IUser> = await service.getUsers();
  res.status(200).json(user)s
} */
