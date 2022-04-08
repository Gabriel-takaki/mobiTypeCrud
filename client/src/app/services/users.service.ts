import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url);
  }

  createUser(user: User){
    return this.http.post(this.url, user)
  }

  deleteuser(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  edituser(id:string, user:User){
    return this.http.put(this.url+'/'+id, user);
  }

}


export interface User{
  id?: number,
  username: string,
  userborndate: string,
  usercpf: string,
  useremail: string,
  userpassword:string,
}


