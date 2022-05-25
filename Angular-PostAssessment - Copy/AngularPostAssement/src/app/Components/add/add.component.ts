import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empForm: FormGroup;
//isDataLoading=false;
  constructor(private adminService: AdminService,private router: Router, private formBuilder: FormBuilder,private _toaster:ToastrService) {
   }
  ngOnInit(): void {
    this.empForm=this.formBuilder.group({
      Id:['',Validators.required],
      Name:['',Validators.required],
      Genere:['',Validators.required],
      AuthorName:['',Validators.required],
      Description:['',Validators.required],
      Content:['',Validators.required],
      availability:['',Validators.required]
    })
  }
  public onSubmit(form: NgForm)
  {
    console.log(form);
   this.adminService.addbooks(form).subscribe(response=>{
    console.log(response);
       const id=response['id'];
       this._toaster.success("Added data succuessfull");
       this.router.navigate(['admin']);

    },(error:any)=>{
      console.log(error);
      this._toaster.error("error message");

    })
  }
}
