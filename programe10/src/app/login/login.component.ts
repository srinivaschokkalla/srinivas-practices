import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   alert:boolean=false;
    email:string='';
     password:string='';
     constructor(private router:Router){}

ngOnInit(): void { }

OnLogin(){
  if(this.email=="srinivas" && this.password=="srinivas123" )
    { 
      this.router.navigate(['/home']);
    }
    else
    {
       alert("please enter valid deatails") ;
  } 
 } 
}

