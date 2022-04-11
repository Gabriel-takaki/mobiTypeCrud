import { Request, Response, Router } from 'express';
import { request } from 'http';
import UserController from '../controllers/userController';
// import Verify from '../middleWares/validationProduct';
// import VerifyUser from '../middleWares/validationUser';
import Validation from '../middleWares/validation';

const userRouter = Router();
const userController = new UserController();
const verify = new Validation();

userRouter.post(
  '/', 
  // async (req: Request, res: Response, next) => verify.nameVerify(req, res, next),
  async (req: Request, res: Response) => userController.createUser(req, res),
);

userRouter.get(
  '/',
  async (req: Request, res: Response) => userController.getAllUsers(req, res),

)

userRouter.get(
  '/:username',
  async (req: Request, res: Response) => userController.getUserByName(req, res),

)

userRouter.delete(
  '/:id',
  async (req: Request, res: Response) => userController.deleteUser(req, res),
)

userRouter.put(
  '/:id',
  async (req: Request, res: Response) => userController.updateUser(req, res),

)
export default userRouter;