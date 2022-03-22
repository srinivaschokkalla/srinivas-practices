import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListsComponent } from './lists/lists.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlComponent } from './url/url.component';

const routes: Routes = [
  {path:'',redirectTo:'/lists',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'url',component:UrlComponent},
  {path:'lists',component:ListsComponent},
  {path:'add',component:AddComponent},
  {path:'add/:no',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'delete',component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
