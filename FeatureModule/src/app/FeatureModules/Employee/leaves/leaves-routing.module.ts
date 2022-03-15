import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { BalanceComponent } from './balance/balance.component';
import { DoctorsappointmentComponent } from './doctorsappointment/doctorsappointment.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { PaidleaveComponent } from './paidleave/paidleave.component';
import { SickleaveComponent } from './sickleave/sickleave.component';
import { WfhComponent } from './wfh/wfh.component';

const routes: Routes = [
  {path:"",component:LeavetypeComponent,children:[
    {path:"apply",component:ApplyComponent,children:[
      {path:'sick',component:SickleaveComponent},
      {path:'paid',component:PaidleaveComponent},
      {path:'doctor',component:DoctorsappointmentComponent},
      {path:'wfh',component:WfhComponent}
    ]},
    {path:'balance',component:BalanceComponent,children:[
      {path:'paid',component:PaidleaveComponent},
      {path:'sick',component:SickleaveComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
