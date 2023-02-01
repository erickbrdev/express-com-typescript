import jsonwebtoken from "jsonwebtoken"
import { ILogin, IUser } from "../interfaces";
import connection from "../models/connection";
import UserModel from "../models/UserModel";
import HttpException from "../shared/http.exception";
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "jylkzxmzxnw"

export default class LoginService {
  model: UserModel

  constructor() {
    this.model = new UserModel(connection)
  }

  async login(login: ILogin) {
    const user = await this.model.getUserByEmailAndPassword(login);
    if (user.length === 0) {
      throw new HttpException(400, 'Email or password is missing.')
    }

    return this.generateToken(user[0])
  }

  generateToken(user: IUser) {
    const payload = { id: user.id, emai: user.email }
    return jsonwebtoken.sign(payload, JWT_SECRET)
  }
}