import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-pre-load.service';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"employee",loadChildren:()=>import("./FeatureModules/Employee/EmployeeModule/employees.module")
  .then(m=>m.EmployeesModule),data:{preload:true,delay:true}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
