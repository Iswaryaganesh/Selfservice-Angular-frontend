import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private fb: FormBuilder, private router:Router ){
      // this.hellotxt = "initial value"
  }
  profileForm:any;
  setprofile:any;
  ngOnInit():void{
    // this.profileForm = this.fb.group({
    //  name:['',Validators.required],
    //  email:['',Validators.required],
    //  mobile:['',Validators.required],
    //  acctno:['',Validators.required],
    // })
    this.setprofile = {name:"", email:"", mobile:"", acctno:""};
    this.setprofile={
      name:"ishu",
      email:"ishu@gmail.com",
      mobile:"2345678",
      acctno:"456789"
    };
  }


      //readonly myvar = <HTMLElement>document.getElementById('profiletxt') as HTMLInputElement | null;


      
}      