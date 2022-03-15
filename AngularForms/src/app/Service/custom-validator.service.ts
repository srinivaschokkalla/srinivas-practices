import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  public mustMatch(password: string, confirmPassword: string)
  {
    return (formGroup: FormGroup)=>{
      const passwordControl=formGroup.controls[password];
      const confirmPasswords=formGroup.controls[confirmPassword];
      if(passwordControl.value !== confirmPasswords.value)
      {
        confirmPasswords.setErrors({passwordMatch:true})
      }
      else
      {
        confirmPasswords.setErrors(null);
      }
    }
  }
}
