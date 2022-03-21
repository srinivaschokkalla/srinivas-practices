import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UrlserviceService } from '../urlservice.service';
import { Report } from '../Models/url.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  report = new Report(0, '', '', new Date(Date.now()), false);
  constructor(private UrlSevice: UrlserviceService, private route: Router, private router: ActivatedRoute, public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.getReportDetailsById(this.router.snapshot.params['id']);
  }

  public getReportDetailsById(id: number): void {
    this.UrlSevice.getReportById(id).subscribe(data => {
      this.report = data;
    });
  }
  public delete(id: number) {
    this.UrlSevice.deleteReport(id).subscribe(response => {
      console.log(response);
      this.route.navigate(['reports-list']);
    }, (error: any) => {
      console.log(error);
    })
  }
  public update(id: number) {
    this.route.navigate(['edit',id]);
  }
}
