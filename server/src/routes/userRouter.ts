import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
// import Verify from '../middleWares/validationProduct';
// import VerifyUser from '../middleWares/validationUser';

const userRouter = Router();
const userController = new UserController();
// const verify = new VerifyUser();

userRouter.post(
  '/', 
  async (req: Request, res: Response) => userController.createUser(req, res),
);

userRouter.get(
  '/',
  async (req: Request, res: Response) => userController.getAllUsers(req, res),

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