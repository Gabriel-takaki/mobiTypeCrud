import { Component, OnInit } from '@angular/core';
import { UsersService, User } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User={
    id: '',
    username: '',
    userborndate: '',
    usercpf: '',
    useremail: '',
    userpassword: ''
  }
  constructor(private UserService: UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    delete this.user.id;

    this.UserService.createUser(this.user).subscribe();
    this.router.navigate(['/inicio']);
  }
}
