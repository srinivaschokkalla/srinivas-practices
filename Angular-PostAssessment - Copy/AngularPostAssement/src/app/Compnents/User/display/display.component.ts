import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [DatePipe]
})
export class DisplayComponent implements OnInit {
  displayedColumns:any[]=['id','Name','Genere','AuthorName','Description','Content','availability','actions']
  data:any;
  bookdata:any;
  firstname:any;
  requestbook:any;
  count=0;
  reqdata:any;
  //isDataloading=true;
    route: any;
    Date1:Date = new Date();
    constructor(private adminService:AdminService, private router:Router,private _toaster:ToastrService,private datePipe: DatePipe) { 
    //  this.Date1 = this.datePipe.transform(this.Date1, 'yyyy-MM-dd');
    }
    ngOnInit(): void {
      debugger;
      this.adminService.getbookss().subscribe(response=>{
        this.data=response;
        this.bookdata=response;
        console.log(this.data);
       // this.isDataloading=false;
      },error=>{
        console.log(error);
       // this.isDataloading=false;
      })
    
    }
    Search(){
      if(this.firstname==""){
        this.ngOnInit();
      }else{
        this.data=this.data.filter(response=>{
          return response.Name.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
          console.log(this.data);
        })
      }
    }
    // public onrequest(data:any) {
    //   debugger
    //   this.adminService.addrequestbook(data).subscribe(response=>{
    //     this.bookdata=response;
    //     this._toaster.success("display the data succuessfull"+this.Date1);
    //    // this.router.navigate(["admin"]);
    //     console.log(this.bookdata);
    //   //  this.isDataloading=false;
    //   },error=>{
    //     console.log(error);
    //   //  this.isDataloading=false;
    //   this._toaster.error("error message");

    //   })
      
    // }
    public onrequest(data: any) {
      this.requestbook = data;
      this.length();
    }
    public length() {
     this.adminService.getUserRequestedbooks().subscribe(res => {
        this.reqdata = res;
        this.countReqData();
      })
    }
    
    public countReqData() {
      if (this.reqdata) {
        for (var i in this.reqdata) {
          this.count = this.count + 1;
        }
      }
      this.addRequest();
    }
    public addRequest() {
      if (!this.reqdata || this.count <= 3) {
          this.getRequestedBook();
      }
      else {
        this._toaster.warning("You exceed the limit of book request");
      }
    }
    public getRequestedBook(){
      this.adminService.addrequestbook(this.requestbook).subscribe(response=>{
            this.bookdata=response;
            this._toaster.success("display the data succuessfull"+this.Date1);
           // this.router.navigate(["admin"]);
            console.log(this.bookdata);
          //  this.isDataloading=false;
          },error=>{
            console.log(error);
          //  this.isDataloading=false;
          this._toaster.error("error message");
    
          })
      }
       
}
