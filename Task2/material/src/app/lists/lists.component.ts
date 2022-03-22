import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddComponent } from '../add/add.component';
import { Report } from '../Models/url';
import { UrlserviceService } from '../urlservice.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  Lists:Report[];
  displayedColumns=['id','from','to','dateCreated','permanentLink','Actions'];
  dataSource = new MatTableDataSource<Report>();

 @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 constructor(private UrlserviceService:UrlserviceService, public dialog: MatDialog) { }

 ngOnInit(): void {
   this.UrlserviceService.getAllReports().subscribe(response=>
     {
       response.map((e) => {
         e.permanentLink.toString() == "true" ? e.permanentLink = true : e.permanentLink = false
     });
     this.Lists=response;
     this.dataSource = new MatTableDataSource<Report>(response);
     this.dataSource.paginator=this.paginator;
     console.log(this.dataSource);
     },error=>{
       console.log(error);
     })

 }

 openDialog() {
   this.dialog.open(AddComponent);
 }
}
