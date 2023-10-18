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

  payplan:Plans
  resp:any;
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
}
