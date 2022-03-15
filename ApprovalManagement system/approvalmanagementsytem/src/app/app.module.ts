import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import{MatCardModule} from '@angular/material/card';
import { BudgetApprovalEmiModule } from 'budget-approval-emi';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     MatCardModule,
     MatIconModule,
   MatInputModule,
    MatIconModule,
    BudgetApprovalEmiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
