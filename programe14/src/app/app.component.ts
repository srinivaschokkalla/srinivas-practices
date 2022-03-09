import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programe14';
  public employees=[
    {"id":1, "name":"srinivas", "age":30},
    {"id":2, "name":"raju", "age":30},
    {"id":3, "name":"mohan", "age":30},
    {"id":4, "name":"mahesh", "age":30}

]
public myId="testId";
public isDisabled=false;
public hasError=true;
public isSpecial=true;
public highlightColor="orange";
public titleStyle={color:"blue",fontStyle:"italic"}
public greeting="";
public successClass="text-success";
public name="";
public messageClasses={
  "text-success":!this.hasError,
"text-danger":this.hasError,
"text-special":this.isSpecial}
onClick(){
  console.log(event);
}
}


