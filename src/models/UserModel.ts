import { Pool, RowDataPacket } from 'mysql2/promise'
import { ILogin, IUser } from '../interfaces';

class UserModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getAll(): Promise<IUser[]> {
    const [rows]  = await this.connection.execute<(IUser[] & RowDataPacket[])>('SELECT * FROM users')
    return rows as IUser[];
  }

  async getUserByEmailAndPassword(login: ILogin): Promise<IUser[]> {
    const [rows] = await this.connection.execute<(IUser[] & RowDataPacket[])>(
      'SELECT * FROM users WHERE email=? AND password=?',
      [login.email, login.password]
    );
    return rows;
  }
}

export default UserModel;