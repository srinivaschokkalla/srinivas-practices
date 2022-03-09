import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ReservationService]
})
export class ReservationComponent implements OnInit {
  reservationDetails1:string[]=[];
  getreservationDetails(){
    this.reservationDetails1=this.Rservice.getinfo1();
    this.reservationDetails1=this.Rservice.getinfo2();

  }
  constructor(private Rservice: ReservationService) { }
  ngOnInit(): void {
  }

}
