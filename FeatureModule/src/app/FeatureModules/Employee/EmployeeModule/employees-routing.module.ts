import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
<<<<<<< HEAD

  {path:"", component:EmployeeListComponent,children:[
    {path:"add", component:AddEmployeeComponent},
    {path:"edit",component:EditEmployeeComponent},
    {path:"delete",component:DeleteEmployeeComponent},
    {path:"leaves",loadChildren:()=>import("../leaves/leaves.module")
    .then(m=>m.LeavesModule)}
     
  ]},
  
=======
  {path:"employeeList",component:EmployeeListComponent,children:[
    {path:"add",component:AddEmployeeComponent},
    {path:"edit",component:EditEmployeeComponent},
    {path:"delete",component:DeleteEmployeeComponent}
  ]}
>>>>>>> 0ab0c1f23d1328030f71e46744834f08e1047cf7
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
