import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  usersList: User[] = [];

  constructor(private UserService: UsersService, private router: Router,) { }

  ngOnInit(): void {
    this.listAllUsers();
  }

  listAllUsers(){
    this.UserService.getAllUsers().subscribe(
      res=>{
        console.log(res);
        this.usersList=<any>res;
      }
    )
  }

  deleteUser(id:string){
    this.UserService.deleteuser(id).subscribe(
      res =>{
        console.log('user deleted');
        this.listAllUsers();
      }      
    )
  }

  editUser(id:string){
    this.router.navigate(['/edit/'+id])
  }


}
