// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { books } from 'src/app/Model/admin.model';
// import { AdminService } from 'src/app/Services/admin.service';

// @Component({
//   selector: 'app-update',
//   templateUrl: './update.component.html',
//   styleUrls: ['./update.component.css']
// })
// export class UpdateComponent implements OnInit {
//   empForm:FormGroup
//   book:books;
//   user:books;
//   public reactiveFormBook:FormGroup;
//   constructor(private formBuilder:FormBuilder,private adminService:AdminService,public matDialogRef:MatDialogRef<UpdateComponent>,
//     private _router:Router) { }
//   ngOnInit(): void {
//     this.reactiveFormBook=this.formBuilder.group({
//       Id:[],
//       Name:['',[Validators.required]],
//       Genere:['',[Validators.required]],
//       AuthorName:['',[Validators.required]],
//       Description:['',[Validators.required]],
//       Content:['',[Validators.required]]
//     })


//     this.reactiveFormBook.patchValue({
    
//       Id:this.book.id,
//       Name:this.book.Name,
//       Genere:this.book.Genere,
//       AuthorName:this.book.AuthorName,
//       Description:this.book.Description,
//       Content:this.book.Content
//     })
//   }

//   public onSubmit(){
//     //  this.adminService.updatebooks(id:Number).subscribe((res: any)=>{console.log(res)
//     //  }, error =>{console.log(error)})

//   }


// }
