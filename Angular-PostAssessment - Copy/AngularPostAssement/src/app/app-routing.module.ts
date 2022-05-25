import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './Compnents/User/display/display.component';
import { EditComponent } from './Componennts/edit/edit.component';
import { AddComponent } from './Components/add/add.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminAccessGuard } from './Guards/admin-access.guard';
import { UserAccessGuard } from './Guards/user-access.guard';
//import { UpdateComponent } from './Components/update/update.component';
import { LoginComponent } from './login/login.component';
//import { RequestComponent } from './User/request/request.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin', component:AdminComponent,canActivate:[AdminAccessGuard]},
  {path:'add',component:AddComponent,canActivate:[AdminAccessGuard]},
  {path:'edit/:id',component:EditComponent,canActivate:[AdminAccessGuard]},
  {path:'display',component:DisplayComponent,canActivate:[UserAccessGuard]}
  
  //{path:'',redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
