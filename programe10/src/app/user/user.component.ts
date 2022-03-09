import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    firstname:new FormControl('',[Validators.required,Validators.pattern('[A-Z]')]),
    lastname:new FormControl('',[Validators.required,Validators.pattern('[A-Z]')]),
})
loginUser()
{
  console.warn(this.loginForm.value)
}
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}
get firstname()
{
  return this.loginForm.get('firstname');
}
get lastname()
{
  return this.loginForm.get('lastname');
}
get malee()
{
  return this.loginForm.get('male');
}


}
