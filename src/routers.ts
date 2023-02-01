import { Router } from 'express'
import UserController from './controllers/UserController';
import LoginController from './controllers/LoginController';

const routers = Router()

routers.get('/health', (req, res) => {
  res.status(200).send('Up and running')
});

const userController = new UserController()
routers.get('/users', (req, res) => userController.getAllUsers(req, res));

const loginController = new LoginController()
routers.post('/login', (req, res) => loginController.auth(req, res));

export default routers