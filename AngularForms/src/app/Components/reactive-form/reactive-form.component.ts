import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/Service/custom-validator.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
signupForm: FormGroup;
submitted=false;

  constructor(private service: CustomValidatorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group(

      {
        name:["Enter your Name",[Validators.required,Validators.minLength(3)]],
        email:["",[Validators.required,Validators.email]],
        userName:["",Validators.required],
        password:["",
      [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")
    ],
        ],
        confirmPassword:["",[Validators.required,
     
       {
        validator: this.service.mustMatch("password","confirmPassword")
      },
      
        ]
      ]
  
      }
    );


    }
   public  onSubmit():void {
      this.submitted = true;
      alert("Submitted");
      if (this.signupForm.valid) {
        console.table(this.signupForm.value);
      }
    }
  
    Onreset() {
      this.signupForm.reset();
    }
    
 

}
