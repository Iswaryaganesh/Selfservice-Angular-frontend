import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { Users } from '../../classDefinition/users';
import { UsersService } from '../users.service';
import { Customers } from 'src/classDefinition/customers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  


  ///load the email in object and continue after lunch
  emailProfile:String;
  customer: Customers = new Customers();//to load data to send to backend
  profileusers :Users = new Users();//to get the profile data from backend.

  constructor(private fb: FormBuilder, private router:Router,private sharedata:SharedataService,private userservice:UsersService){
      // this.hellotxt = "initial value"
  }

  ngOnInit():void{

    //this.emailProfile=this.sharedata.getprofileusers()
    //this.emailProfile = JSON.stringify(localStorage.getItem("active"))
    let value:string=localStorage.getItem("active")!
    console.log(value)
    console.log(typeof(value))
    this.emailProfile= JSON.parse(value)

    //console.log('hello by profile')
    //console.log(this.emailProfile);
    this.customer.id= this.emailProfile
    //console.log('hello hello')
    this.userservice.ProfilePage(this.emailProfile).subscribe(
      response =>{
        this.profileusers = response;
        console.log(this.profileusers);
      }
    );
    


    


    // this.profileForm = this.fb.group({
    //  name:['',Validators.required],
    //  email:['',Validators.required],
    //  mobile:['',Validators.required],
    //  acctno:['',Validators.required],
    // })


    
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }




  
}
      //readonly myvar = <HTMLElement>document.getElementById('profiletxt') as HTMLInputElement | null;


      
      
