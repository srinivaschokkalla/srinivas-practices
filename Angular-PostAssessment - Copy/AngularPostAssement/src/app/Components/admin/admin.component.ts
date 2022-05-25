import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { books } from 'src/app/Model/admin.model';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns:any[]=['id','Name','Genere','AuthorName','Description','Content','availability','actions']
data:any;
//isDataloading=true;
  route: any;
  constructor(private adminService:AdminService, private router:Router,private _toaster:ToastrService) { }
  ngOnInit(): void {
    debugger;
    this.adminService.getbookss().subscribe(response=>{
      this.data=response;
      console.log(this.data);
     // this.isDataloading=false;
    },error=>{
      console.log(error);
     // this.isDataloading=false;
    })
  }
  public ondelete(Id:any){
    this.adminService.deletebooks(Id).subscribe(response=>{
      debugger;
      console.log(response);
      window.location.reload();
      this._toaster.success("Delete data succuessfull");
      this.route.navigate(['/admin']);
    },(error:any)=>{
      console.log(error);
    })
  }
  
// LogOut(){
//   this.route.navigate([''])
// }
editbookid(id:number){
this.router.navigate(['/edit',id])

}
}
