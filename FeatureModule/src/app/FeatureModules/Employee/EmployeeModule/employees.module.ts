import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [ 
  AddEmployeeComponent,
  EditEmployeeComponent,
  DeleteEmployeeComponent,
  EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
