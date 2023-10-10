import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validateform from '../helpers/validateform';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { RouterComponent } from '../router/router.component';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent {

  otpfrombackend:String;
  otpfromfrontend:String;
  confirmpwd :String;
  user:Users = new Users();
  checkuser:String;
  showotp:Boolean=false;
  showchangepwd:Boolean=false;
  Repassword:String;
  forgotpwd: FormGroup;
  newpwd:FormGroup;
   constructor(private fb: FormBuilder, private userservice:UsersService, private sharedata:SharedataService, private router:Router) {
      this.myForm();
      this.newwpwd();
   }
  myForm() {
    this.forgotpwd = this.fb.group({
    mobile: ['', Validators.required ]
    });
  }
  newwpwd() {
    this.newpwd = this.fb.group({
    password: ['', Validators.required ],
    Repassword: ['', Validators.required ]
    });
  }

  onsubmit()
  {
    if(this.forgotpwd.valid)
    {
      console.log(this.user);
        this.userservice.forgot(this.user).subscribe(
          response => {
            this.checkuser = response;
            console.log(response);
            if(this.checkuser === 'Not exists')
            {
              this.userservice.Showerror("Incorrect mobile number","Invalid");
            }
            else 
            {
              this.sharedata.setPhoneNumber(this.user.phonenumber);
              this.userservice.Showinfo("","Enter otp sent to your registered mobile number");
              this.showotp = !this.showotp;
              
              this.userservice.Checkotpforforgotpwd(this.user).subscribe(
                response =>{               
                  let Response = response;
                  this.otpfrombackend = response;
                  console.log(Response);      
                 
                }
              );

            }
          }
        )
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.forgotpwd);
    }
  }

  otpverify()
  {
    if(this.otpfromfrontend===this.otpfrombackend){
      console.log('user can change password')
      this.showchangepwd = !this.showchangepwd;
    }
    else{
      console.log('wrong otp')
      this.userservice.Showerror("Invalid OTP","Invalid");
    }
      
  }

  setpwd()
  {
    if(this.newpwd.valid)
    {
        if(this.user.password===this.Repassword)
        {
          let tempNumber = this.sharedata.getPhoneNumber();
          this.user.phonenumber= tempNumber
          console.log(this.user);
          this.userservice.Changepwd(this.user).subscribe(
          response =>{
            console.log('good job');
            if(response==='Same password')
            {
              this.userservice.Showerror("Invalid","New password cannot be same as old password");
            }
            else
            {
              this.userservice.Showsuccess("Success","Password has been changed successfully");
            }
          }  
          );
          this.router.navigate(['/login'])
        }
        else
        {
          this.userservice.Showerror("Invalid","Password did not match");
        }
    }
  }

}
