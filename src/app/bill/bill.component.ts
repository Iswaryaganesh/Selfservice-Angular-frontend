import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import Validateform from '../helpers/validateform';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  payfailed:boolean=false;
  selecteditem:String;
  payplan:any
  paypopup:any;
  resp:any;
  selectedItem: String;
  showcard:boolean;
  showupi:boolean;
  payform:FormGroup;
  constructor(private fb: FormBuilder, private router:Router,private sharedata:SharedataService,private userservice:UsersService)
  {
    
  }
  payForm!: FormGroup
  ngOnInit():void{
    this.payform = this.fb.group({
      cardnum:['',Validators.required],
      expiry:['',Validators.required],
      cvv:['',Validators.required]
    })

   
    
  
    this.payplan = this.sharedata.getPaymentPlan()
    console.log(this.payplan)
    console.log('printing details')
    console.log(this.payplan.planID);
    console.log(this.payplan.planName)
    console.log(this.payplan.dueDate);
    console.log(this.payplan.billStatus);
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    this.payplan.dueDate = formatDate(this.payplan.dueDate, format, locale);
    this.payplan.paymentDate = formatDate(this.payplan.paymentDate, format, locale);
    // this.userservice.getPaymentDetails(this.payplan).subscribe(
    //  (res:any)=>{
    //   this.resp = res;
    //   console.log(this.resp);
    //  }
    //  )
  }

    onsubmit()
    {

    }




    onSelected(value:String)
    {
        this.selectedItem = value;
        console.log(this.selectedItem);
        if(this.selectedItem == 'card')
        {
          this.showcard = true
          this.showupi = false;
        }
        else if(this.selectedItem == 'upi')
        {
          this.showupi = true;
          this.showcard = false;
        }
        else
        {
          this.showcard = false;
          this.showupi = false;
        }
    }
    navigate()
    {
      if(this.selecteditem != 'card' && this.selecteditem!='upi')
      {
      this.userservice.Showwarning("Please select a payment type","!")
      }
      else
      {
          this.paypopup = this.payplan;
      }
    }

    gototoast(payfailed:boolean)
    {
      console.log(payfailed)
      if(payfailed === true)
      {
        this.userservice.Showwarning("Enter all the fields","")
      }
    }
    paybills(){
      if(this.payform.valid)
      {
      this.userservice.paybills(this.payplan).subscribe(
          response=>{
            console.log(`hello`)
            console.log(response)
          
          }


      )

      this.userservice.Showsuccess("Success","Payment done successfully")
      this.router.navigate(['/plans'])
      console.log(`hello`)
      }
        else
        {
          this.payfailed = true;
          Validateform.validateform(this.payform);
          this.gototoast(this.payfailed);
          console.log(this.payfailed)
        }

      
       
    }
   
}
