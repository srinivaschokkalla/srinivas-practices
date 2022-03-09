import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DataService } from './data.service';
import { EInfoComponent } from './e-info/e-info.component';
import { ReservationService } from './reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GallaryComponent,
    ReservationComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    TwowaybindingComponent,
    EInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [DataService,ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }




