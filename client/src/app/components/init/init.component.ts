import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  usersList: User[] = [];

  constructor(private UserService: UsersService) { }

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

}
