import { Component, OnInit } from '@angular/core';
import { UsersService, editUser } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listbyname',
  templateUrl: './listbyname.component.html',
  styleUrls: ['./listbyname.component.css']
})
export class ListbynameComponent implements OnInit {

  userByName: any={
    username: '',
    userborndate: '',
    usercpf: '',
    useremail: '',
    userpassword: ''
  }
  constructor(private UserService: UsersService, private router:Router, private acitveRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const usernameP = this.acitveRoute.snapshot.params['username'];
    this.listbyname(usernameP)
  }

  listbyname(paramName:string){
    console.log(this.userByName);

    this.UserService.getUserByName((paramName)).subscribe(
      res=>{
        this.userByName=<any>res
        console.log(this.userByName);
        
      },
      err=>console.log(err)
    );

  }

  deleteUser(id:string){
    this.UserService.deleteuser(id).subscribe(
      res =>{
        console.log('user deleted');
        this.listbyname('noOne');
      }      
    )
  }

  editUser(id:string){
    this.router.navigate(['/edit/'+id])
  }


}





  
  
