import { Request, Response } from "express";
import { ILogin } from "../interfaces";
import LoginService from "../services/LoginService";

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async auth(req: Request<{}, {}, ILogin>, res: Response) {
    const token = await this.service.login(req.body);
    res.status(200).json({ token });
  }
} 