import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { EInfoComponent } from './e-info/e-info.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'user',component:UserComponent},
  {path:'twowaybinding',component:TwowaybindingComponent},
  {path:'e-info',component:EInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




