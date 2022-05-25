import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './Components/add/add.component';
import { MatTableModule } from '@angular/material/table'  
import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './Componennts/edit/edit.component';
import { DisplayComponent } from './Compnents/User/display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AddComponent,
    EditComponent,
    DisplayComponent,
    
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    MatTableModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
