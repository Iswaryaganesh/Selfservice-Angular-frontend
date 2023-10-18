import { Component, ElementRef, ViewChild } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms'
import {Route, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/customers';
import Validateform from 'src/app/helpers/validateform';
import { SharedataService } from 'src/app/sharedata.service';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  //hello by isu
  //hello by velu
  users : Users = new Users();
  customers:Customers = new Customers();
  emailphone:Customers = new Customers();
  confirmpwd :String;

  otpfrombackend:String;

  otpfromfrontend:String;

  regForm!: FormGroup
  arr:any = ["0101"]
  obj={
    otp:"0101"
  }
  arr1:any = ["0","1","0","1"]

  otpget:any = [];
  public show1:boolean = false;
  // public show2:boolean = true;
  public buttonName:any = 'Show';
  otpvalid:boolean = false
  show:boolean=false
  acctnum:String;
  constructor(private fb: FormBuilder, private router:Router,private userservice :UsersService,private sharedata:SharedataService) //inject formbuilder
  {

  }
  ngOnInit():void{
  this.regForm = this.fb.group({
    name:['',Validators.required],
    pwd:['',Validators.required],
    mobile:['',Validators.required],
    email:['',Validators.required],
    repwd:['',Validators.required]


    
    
  })

  this.acctnum=this.sharedata.getRegAccountNumber();
  this.customers.accountNumber = this.acctnum;
  this.userservice.SetRegpage(this.customers).subscribe( response =>{
    this.emailphone = response;
    console.log(this.customers);
    console.log(this.emailphone);
  });



}

  // @ViewChild('scroll') scroll:ElementRef;

  onsubmit()
  {
    // this.scroll.nativeElement.scrollTop= this.scroll.nativeElement.scrollHeight;
    if(this.regForm.valid)
    {
      // console.log(this.regForm.value)
      //send val to db
      
      if(this.users.password===this.confirmpwd){
      //console.log(this.users)
      // this.userservice.CustomerSignup(this.users).subscribe(
      //   response =>{
      //     //console.log(this.confirmpwd);
      //     let Response = response;
      //     console.log(Response);
      //     if(Response === 'Object Created'){
      //       this.userservice.Showsuccess("Registered successfully","Success");
      //       //this.router.navigate([''])
      //     }      
      //     if(Response === 'Email already exist')
      //     {
      //       this.userservice.Showwarning("Email already exists","Invalid");
      //     }
      //     else if(Response === 'Phone number already exists')
      //     {
      //         this.userservice.Showwarning("Phone number already exists","Invalid");
      //     }
      //     else if(Response === 'Phone number should be of 10 digits')
      //     {
      //         this.userservice.Showwarning("Phone number should be of 10 digits","Invalid");
      //     }
      //   }  
      // );

      console.log(this.users)
      console.log('hello by otp')
      this.userservice.CustomersOTP(this.users).subscribe(
        response =>{
          
          let Response = response;
          this.otpfrombackend = response;
          console.log(Response);      
          if(Response === 'Email already exist')
          {
            this.userservice.Showwarning("Email already exists","Invalid");
          }
          else if(Response === 'Phone number already exists')
          {
              this.userservice.Showwarning("Phone number already exists","Invalid");
          }
          else if(Response === 'Phone number should be of 13 digits including +91')
          {
              this.userservice.Showwarning("Phone number should be of 13 digits","Invalid");
          }else{
            this.userservice.Showsuccess("otp is generated","valid");
            this.router.navigateByUrl('registerr#otpsection');
            this.show1 = !this.show1;
          }
         
        }
      );
        
    }
    else{
        console.log("password do not match")
        this.userservice.Showerror("password and confirm password does not match","Sorry");
     }
      /*   /////////////////////////////////////////PETHACHI COMMENTED THIS OUT///////////////////////////////////
      // this.otpget = this.arr[0].split("");
      // this.otpget = this.obj.otp.split("");
      // console.log(this.otpget);
      // this.show2 = !this.show2;

      //this.router.navigate(['/home'])
      */
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.regForm);
    }
  }
  
  otpverify()
  {
    if(this.users.password===this.confirmpwd){
      //console.log('hello by final')
      //console.log(this.otpfrombackend)
      if(this.otpfromfrontend===this.otpfrombackend){
        console.log('user can log in')
        
        let tempNumber = this.sharedata.getAccountNumber()
        //console.log(tempNumber)
        //console.log(typeof(tempNumber))
        this.users.accountNumber= tempNumber
        this.userservice.CustomerSignup(this.users).subscribe(
        response =>{
          console.log('good job');
        }  
        );
        this.userservice.Showsuccess("Registered successfully","Success");
        this.router.navigate([''])
      }
      else{
        console.log('wrong otp')
        this.userservice.Showerror("Invalid OTP","Invalid");
      }
      
    }
  }

  onClick()
  {
    this.show = !this.show;
  }



  
}
