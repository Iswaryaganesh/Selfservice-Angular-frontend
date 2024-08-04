import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import {Route, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import Validateform from 'src/app/helpers/validateform';
import { SharedataService } from 'src/app/sharedata.service';
import { Users } from 'src/classDefinition/users';
import { UsersService } from 'src/app/users.service';
import { Login } from 'src/classDefinition/Login';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  login : Login = new Login();
  getData : String
 

  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private router:Router,private userservice :UsersService,private sharedata:SharedataService, private spinner:NgxSpinnerService) //inject formbuilder
  {

  }
  ngOnInit():void{
  this.loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })}
  show:boolean=false;

  onsubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)

      console.log(this.login)
      this.userservice.loginUser(this.login).subscribe(
          response =>{
            let Response = response;
            console.log(Response);
            if(Response==='password does not match')
            {
              this.userservice.Showerror("Password does not match","Invalid");
            }
            else if(Response==='phone/email does not exist')
            {
              this.userservice.Showerror("Phone/email does not match","Invalid");
            }
            else if(Response==='Successful Login'){
              this.userservice.Showsuccess("Login Successful","Welcome");
              this.spinner.show();

              setTimeout(() => {
                /** spinner ends after 5 seconds */
                this.spinner.hide();
              }, 5000);

              // to fetch the customerid by sending currently logged in user email
              this.userservice.fetchId(this.login).subscribe(
                response => {
                  let Response = response;
                  this.sharedata.setprofileusers(Response);
                  console.log("localstorage is:"+Response);
                }
              )
              this.router.navigate(['/home'])
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
  onClick()
  {
  this.show = !this.show;
  }
}
