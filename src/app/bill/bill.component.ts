import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import Validateform from '../helpers/validateform';
import { DatePipe,formatDate } from '@angular/common';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  providers: [DatePipe]
})
export class BillComponent {
  payfailed:boolean=false;
  selecteditem:String;
  payplan:any
  duration:String;
  paypopup:any;
  resp:any;
  selectedItem: String;
  showcard:boolean;
  showupi:boolean;
  payform:FormGroup;
  selectedValue: string;
  today: Date = new Date();
  formattedDate:string;
  day: number;


  count : number =0;

  constructor(private fb: FormBuilder, private router:Router,private sharedata:SharedataService,private userservice:UsersService,private datePipe: DatePipe)
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



    // const format = 'dd/MM/yyyy';
    // const locale = 'en-US';
    // this.payplan.dueDate = formatDate(this.payplan.dueDate, format, locale);
    // this.payplan.paymentDate = formatDate(this.payplan.paymentDate, format, locale);

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
        console.log(this.duration);
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

       console.log(this.payplan.speed);

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



    onSelectChange(selected: string) {
      console.log('Selected value changed:', selected);
      this.formattedDate = this.datePipe.transform(this.today, 'dd/MM/yyyy')!;
      this.day = this.today.getDate();
      console.log(this.formattedDate)
      console.log(this.day);


      if(this.day === 1 || this.day === 11 || this.day === 21 ){
        console.log("yes");
      }
      else{
        console.log("no");
        const currentDate = new Date();
        for (let i = 0; i < 10; i++) {
          currentDate.setDate(this.today.getDate() + i);
          this.day = currentDate.getDate();
          if(this.day === 1 || this.day === 11 || this.day === 21 ){
              break;
          }
        }
        console.log(currentDate);
        const dueDate = new Date(currentDate);

        if(selected == '1 month'){
          dueDate.setMonth(currentDate.getMonth() + 1)
          console.log(dueDate);
        }
        else if(selected == '3 months'){
          dueDate.setMonth(currentDate.getMonth() + 3)
          console.log(dueDate);
        }
        else if(selected == '6 months'){
          dueDate.setMonth(currentDate.getMonth() + 6)
          console.log(dueDate);
        }
       
      }


      

    }
   
}
