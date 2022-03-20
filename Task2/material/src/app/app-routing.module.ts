import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlComponent } from './url/url.component';

const routes: Routes = [
  {path:'',redirectTo:'/navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'url',component:UrlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
