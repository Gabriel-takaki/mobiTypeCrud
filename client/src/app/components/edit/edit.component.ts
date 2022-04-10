import { Component, OnInit } from '@angular/core';
import { UsersService, editUser } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: editUser={
    username: '',
    userborndate: '',
    usercpf: '',
    useremail: '',
    userpassword: ''
  }
  constructor(private UserService: UsersService, private router:Router, private acitveRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const paramId = this.acitveRoute.snapshot.params['id'];
    console.log(paramId);
    
  }

  edit(){
    
    // delete this.user.id;
    console.log(this.user);
    const paramId = this.acitveRoute.snapshot.params['id'];

    this.UserService.edituser((paramId), this.user).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }
}
