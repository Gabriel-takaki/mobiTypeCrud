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

  getUserByName(username: string){
    return this.http.get(this.url+'/'+username);
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
  id?: any,
  username: string,
  userborndate: string,
  usercpf: string,
  useremail: string,
  userpassword:string,
}



export interface editUser{
  username: string,
  userborndate: string,
  usercpf: string,
  useremail: string,
  userpassword:string,
}
