import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
displayedColumns:string[]=['name','designation','department','gender']
data:Employee[]=[];
isDataloading=true;
  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isDataloading=false;
    },error=>{
      console.log(error);
      this.isDataloading=false;
    })
  }

}
