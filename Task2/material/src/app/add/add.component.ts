import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlserviceService } from '../urlservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ReportForm: FormGroup | undefined;
  dailogtoggle:number=0;
  UrlserviceService: any;
  
  constructor(private UrlService: UrlserviceService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute ) {
       
     }
  
    ngOnInit(): void {
      this.dailogtoggle=Number(this.route.snapshot.params['no']);
  
      this.ReportForm=this.formBuilder.group({
     
        from:['',Validators.required],
        to:['',Validators.required],
        dateCreated:['',Validators.required],
        permanentLink:['',Validators.required]
      })
      
    }
  
    public onFormSubmit(form: NgForm)
    {
      console.log(form);
     
     this.UrlserviceService.addReport(form).subscribe(response=>{
       
      console.log(response);
        const id=response['id'];
        
        this.router.navigate(['details',id])
      },(error:any)=>{
        console.log(error);
      })
    }

}
