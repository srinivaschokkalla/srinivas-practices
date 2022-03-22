import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../Models/url';
import { UrlserviceService } from '../urlservice.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  ReportForm: FormGroup;
  report:Report;
  
  constructor(private UrlserviceService: UrlserviceService,private route: Router, private formBuilder: FormBuilder,private router:ActivatedRoute) {
       
     }
  
    ngOnInit(): void {
  
      this.ReportForm=this.formBuilder.group({
        id:[],
        from:['',Validators.required],
        to:['',Validators.required],
        dateCreated:['',Validators.required],
        permanentLink:['',Validators.required]
      });
      this.getReportDetailsById(this.router.snapshot.params['id']);
      
    }

  public getReportDetailsById(id:number):void
  {
   this.UrlserviceService.getReportById(id).subscribe(data=>{
     this.report=data
     this.patchReportDetails(data)
   });
  }
  
  public patchReportDetails(report:Report)
  {
    this.ReportForm.patchValue({
      id:report.id,
      from:report.from,
      to:report.to,
      dateCreated:report.dateCreated,
      permanentLink:report.permanentLink
    })

  }
    public onFormSubmit(form: Report)
    {
      console.log(form);
     this.UrlserviceService.edit(form).subscribe(response=>{
       
      console.log(response);      
        this.route.navigate(['/list'])
      },(error:any)=>{
        console.log(error);
      })
    }

}
