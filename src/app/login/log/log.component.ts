import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
// import { MatSnackBar } from '@angular/material';
import {Route, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import Validateform from 'src/app/helpers/validateform';
import { SharedataService } from 'src/app/sharedata.service';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';
//import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  users : Users = new Users();
  getData : String
 

  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private router:Router,private userservice :UsersService,private sharedata:SharedataService) //inject formbuilder
  {

  }
  ngOnInit():void{
  this.loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })}

  onsubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)

      console.log(this.users)
      this.userservice.loginUser(this.users).subscribe(
          response =>{
            let Response = response;
            console.log(Response);
            if(Response === 'Login succesfull'){
              this.userservice.Showsuccess("Login Successful","Welcome");
              // this.spinner.show();

              // setTimeout(() => {
              //   /** spinner ends after 5 seconds */
              //   this.spinner.hide();
              // }, 5000);
              this.sharedata.setprofileusers(this.users.email);
              this.router.navigate(['/home'])
              
            }
            else if(Response==='password does not match')
            {
              this.userservice.Showerror("Password does not match","Invalid");
            }
            else if(Response==='phone/email does not exist')
            {
              this.userservice.Showerror("Phone/email does not match","Invalid");
            }
          }      
      );
      // this.snackBar.open('Login Successful','',{duration:1000})
      
      //send val to db
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.loginForm);
    }
  }
}
