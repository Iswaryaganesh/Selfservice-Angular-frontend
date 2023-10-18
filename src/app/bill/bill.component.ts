import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  selecteditem:String;
  payplan:Plans
  resp:any;
  selectedItem: String;
  showcard:boolean;
  showupi:boolean;
  constructor(private fb: FormBuilder, private router:Router,private sharedata:SharedataService,private userservice:UsersService)
  {
    
  }
  payForm!: FormGroup
  ngOnInit():void{
    this.payForm = this.fb.group({
      name:['',Validators.required],
      amt:['',Validators.required]
    })
  
    this.payplan = this.sharedata.getPaymentPlan()
    console.log(this.payplan)

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
    }
}
