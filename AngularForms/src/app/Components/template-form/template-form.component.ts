import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
model=new User();
userForm: any;
skill:string[]=["Angular","Docker","API","SQL Server","Csharp"]
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(userForm:any):void{
    this.userForm.reset(userForm);
  }

}
