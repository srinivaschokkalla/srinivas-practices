import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { BalanceComponent } from './balance/balance.component';
import { DoctorsappointmentComponent } from './doctorsappointment/doctorsappointment.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { PaidleaveComponent } from './paidleave/paidleave.component';
import { SickleaveComponent } from './sickleave/sickleave.component';
import { WfhComponent } from './wfh/wfh.component';


@NgModule({
  declarations: [
    ApplyComponent,
    BalanceComponent,
    DoctorsappointmentComponent,
    LeavetypeComponent,
    PaidleaveComponent,
    SickleaveComponent,
    WfhComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
