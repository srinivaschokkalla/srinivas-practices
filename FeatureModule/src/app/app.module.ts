import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/add-employee/add-employee.component';
import { EditEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/delete-employee/delete-employee.component';
import { EmployeeListComponent } from './FeatureModules/Employee/EmployeeModule/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
=======
import { EmployeesModule } from './FeatureModules/Employee/EmployeeModule/employees.module';
// import { AddEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/add-employee/add-employee.component';
// import { EditEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/edit-employee/edit-employee.component';
// import { DeleteEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/delete-employee/delete-employee.component';
// import { EmployeeListComponent } from './FeatureModules/Employee/EmployeeModule/employee-list/employee-list.component';
>>>>>>> 0ab0c1f23d1328030f71e46744834f08e1047cf7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeListComponent,
    HomeComponent
=======
   
>>>>>>> 0ab0c1f23d1328030f71e46744834f08e1047cf7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
