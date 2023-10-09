import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';
import { Customers } from '../customers';
import { UsersService } from 'src/app/users.service';
import { SharedataService } from '../sharedata.service';


@Component({
  selector: 'app-acct1',
  templateUrl: './acct1.component.html',
  styleUrls: ['./acct1.component.css']
})
export class Acct1Component {

  customers : Customers = new Customers();


  acctForm!: FormGroup
  constructor(private fb: FormBuilder, private router:Router,private userservice:UsersService, private sharedata :SharedataService) //inject formbuilder
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
              console.log(typeof(this.customers.accountNumber))
              this.sharedata.setAccoutNumber(this.customers.accountNumber)
              this.sharedata.setRegAccoutNumber(this.customers.accountNumber)
              this.userservice.Showsuccess("Account verified successfully","Success");
              this.router.navigate(['/registerr'])
            }
            else if(Response === 'Account holder name is wrong')
            {
              this.userservice.Showerror("Account holder name is wrong","Invalid");
            }
            else if(Response === 'Account holder name/number is incorrect')
            {
              this.userservice.Showerror("Account holder name/number is incorrect","Invalid");
            }
            else if(Response === 'account number does not exist')
            {
              this.userservice.Showerror("Account number does not exist","Invalid");
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
