import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { InputUser } from '../interfaces/user.interface';
// import Product from '../interfaces/product.interface';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, userborndate, usercpf, useremail, userpassword }: InputUser): Promise <InputUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO crud_user.user ( username, userborndate, usercpf, useremail, userpassword) VALUES (?, ?, ?, ?, ?)',
      [username, userborndate, usercpf, useremail, userpassword],
    );
    return { id: insertId, username, userborndate, usercpf, useremail, userpassword };
  }

  public async getAll(): Promise<InputUser[]> {
    const [allProducts] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM crud_user.user;',
    );

    return allProducts as InputUser[];
  }

  public async delete(id:number): Promise<void>{
     await this.connection.execute(
      'DELETE FROM crud_user.user WHERE id= ?;',
      [id],
    );
  }

  public async update({ username, userborndate, usercpf, useremail, userpassword, id }: InputUser): Promise <InputUser> {
    console.log(id);
    
    const [ insertId ] = await this.connection.execute(
      'UPDATE crud_user.user SET username= ?, userborndate= ?, usercpf= ?, useremail= ?, userpassword= ? WHERE id= ?',
      [username, userborndate, usercpf, useremail, userpassword, id],
    );
    return { username, userborndate, usercpf, useremail, userpassword, };
  }
  
} 