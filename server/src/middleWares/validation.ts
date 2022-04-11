import { NextFunction, Request, Response } from 'express';
import { InputUser } from '../interfaces/user.interface';

export default class Validation{
  public nameVerify = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { username }: InputUser = req.body.user;
    
    if (!username) return res.status(400).json({ error: 'Name is required' });
    if (typeof username !== 'string') {
      return res.status(422).json({ error: 'Name must be a string' });
    }
    if (username.length <= 2) {
      return res.status(422).json({ error: 'Name must be longer than 2 characters' });
    }
    next();
    console.log(res);
  };
  
}

// forma de verificação feita na mão (sem joi) com ajuda do pull Request do Caio Lima tribo 15