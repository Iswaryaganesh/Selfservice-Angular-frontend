import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';
import { Customers } from '../customers';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-acct1',
  templateUrl: './acct1.component.html',
  styleUrls: ['./acct1.component.css']
})
export class Acct1Component {

  customers : Customers = new Customers();


  acctForm!: FormGroup
  constructor(private fb: FormBuilder, private router:Router,private userservice:UsersService) //inject formbuilder
  {

  }

  ngOnInit():void{
    this.acctForm = this.fb.group({
      acctno:['',Validators.required],
      name:['',Validators.required]
    })}

    onsubmit()
    {
      if(this.acctForm.valid)
      {


        console.log(this.acctForm.value)
        //send val to db

        console.log(this.customers)

        this.userservice.CustomerValidation(this.customers).subscribe(

          response =>{
            let Response = response;
            console.log(Response);
            if(Response === 'Login Successfull'){
              this.router.navigate(['/registerr'])
            }
            else{
              alert('Wrong password');
            }
          }   


        );
        
  
        
      }
      else{
        //throw error using toaster
        Validateform.validateform(this.acctForm);
      }
    }
}
