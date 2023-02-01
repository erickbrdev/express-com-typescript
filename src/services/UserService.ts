import { IUser } from "../interfaces";
import connection from "../models/connection";
import UserModel from "../models/UserModel";

export default class UserService {
  model: UserModel

  constructor() {
    this.model = new UserModel(connection);
  }

  async getUsers(): Promise<IUser[]> {
    const users: Array<IUser> = await this.model.getAll();
    return users;
  }
}