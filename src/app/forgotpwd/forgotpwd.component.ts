import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validateform from '../helpers/validateform';
import { UsersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent {

  mobile:String;
  checkuser:String;
  showotp:Boolean=false;
  forgotpwd: FormGroup;
   constructor(private fb: FormBuilder, private userservice:UsersService) {
      this.myForm();
   }
  myForm() {
    this.forgotpwd = this.fb.group({
    mobile: ['', Validators.required ]
    });
  }

  onsubmit()
  {
    if(this.forgotpwd.valid)
    {
        this.userservice.forgot(this.mobile).subscribe(
          response => {
            this.checkuser = response
          }
        )
        if(this.checkuser === 'User exists')
        {
          this.showotp = !this.showotp;
        }
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.forgotpwd);
    }
  }
}
