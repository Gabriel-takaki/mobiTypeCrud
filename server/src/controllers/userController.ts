import { Request, Response } from 'express';
import { InputUser } from '../interfaces/user.interface';
// import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import UserModel from '../models/userModel';
// import JWT from 'jsonwebtoken';
import jwtTokenGenerator from '../helpers/jwtTokenGenerator';

export default class UserController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const { username, userborndate, usercpf, useremail, userpassword } = req.body; 
    const newUser: InputUser = await this.userModel.create({ username, userborndate, usercpf, useremail, userpassword });
    const newToken = jwtTokenGenerator(newUser);
    console.log(newToken);
    
    // const generateToken: InputUser = { id: username.id, username };

    return res.status(201).json({ token: newToken });
  }

  public async getAllUsers(_req: Request, res: Response): Promise<Response> {
    const allProducts: InputUser[] = await this.userModel.getAll();
    console.log(allProducts);
    return res.status(200).json(allProducts);
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
     await this.userModel.delete(+id);
    return res.status(204).json({message: "usuário deletado com sucesso"});
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    const { username, userborndate, usercpf, useremail, userpassword } = req.body; 
    const  notId  = req.params.id;
    const id = parseInt(notId)
    
    const newUser: InputUser = await this.userModel.update({ username, userborndate, usercpf, useremail, userpassword, id });
    console.log(newUser);
    
    // const generateToken: InputUser = { id: username.id, username };

    return res.status(201).json({ token: newUser });
  }
}