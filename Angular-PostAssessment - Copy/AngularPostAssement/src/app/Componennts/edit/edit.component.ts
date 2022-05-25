import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { books } from 'src/app/Model/admin.model';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empForm: FormGroup
  val: any;
  book: books;
  users: books[] = [];
  user: books;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
    private _router: Router, public route: ActivatedRoute,private _toaster:ToastrService) { }
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {

      this.val = params['id'];

    })
    debugger;
    console.log(this.val);

    this.adminService.getbooksById(this.val).subscribe(data => {
      this.user = data;
    })
    this.empForm = this.formBuilder.group({
      id: [],
      Name: ['', [Validators.required]],
      Genere: ['', [Validators.required]],
      AuthorName: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Content: ['', [Validators.required]],
      availability: ['', [Validators.required]]

    })
  }
  public onSubmit() {
    this.adminService.editbooks(this.user).subscribe(data => {
    
    })
    this.getdata();
    this._router.navigate(["/admin"])
  }
  getdata() {
    this.adminService.getbookss().subscribe((response) => {
      this.users = response;
      this._toaster.success("Update data succuessfull");

    })
  }
  // public onFormSubmit(form: NgForm) {
  //   console.log(form);
  //   this.adminService.addbooks(form).subscribe(response => {
  //     console.log(response);
  //     const id = response['id'];
  //     this._router.navigate(['details', id])
  //   }, (error: any) => {
  //     console.log(error);
  //   })
  // }
}
