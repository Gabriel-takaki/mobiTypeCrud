import { Component, OnInit } from '@angular/core';
import { User } from './services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  finduser: User={
    id: '',
    username: '',
    userborndate: '',
    usercpf: '',
    useremail: '',
    userpassword: ''
  }

  constructor( private router:Router) { }

  ngOnInit(): void {
    
  }

  getbyname(userParam:string){
    // const userParam = this.finduser.username

console.log(userParam);

    this.router.navigate(['/listbyname/'+userParam])

  }
}

