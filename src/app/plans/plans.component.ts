import { Component, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Customers } from '../../classDefinition/customers';
import { SharedataService } from '../sharedata.service';
import { mobilePlans } from '../../classDefinition/mobilePlans';
import { formatDate } from '@angular/common';
import { routerPlans } from 'src/classDefinition/routerPlans';
import { simCardWithPlans } from 'src/classDefinition/simcardWithPlans';



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  //clickedIndex:number;
  // planlist = [{"data":"30GB","left":"10.30GB","cost":"401","daysleft":"15","planname":"BASIC"},{"data":"15GB","left":"7.90GB","cost":"275","daysleft":"25","planname":"BASIC"},{"data":"70GB","left":"34.34GB","cost":"701","daysleft":"12","planname":"PREMIUM"}];
  id:String;
  popobj:any;
  used:number
  show:boolean=true;
  showhistory:boolean=false;
  history:any;
  color:String="normal";
  colorval:String;
  cycledate:String = "01/12/2023";
  unused: number;
  dataLeft: number;
  
  setuseddata(total:any,used:any)
  {
    total = total.substring(0, total.length - 2);
    // b = b.substring(0, b.length - 2);
    this.used = (used/total)*100;
    this.dataLeft = Number((total-used).toFixed(2));
    this.unused = 100-this.used;
    //console.log("used:" +this.val)
  }
  
  customer:Customers = new Customers();
  plans:simCardWithPlans[];
  resp:any;
  //selected:Plans = new Plans();   ///You removed this without any indication watch out for any errors while clicking the button
  constructor(private router:Router, private userservice:UsersService, private sharedata:SharedataService)
  {
    
  }
  

 

  ngOnInit():void
  {
    
    //this.clickedIndex;
    let value:string=localStorage.getItem("active")!
    console.log(value)
    console.log(typeof(value))
    this.id= JSON.parse(value)
    // this.customer.email = this.email;
    // console.log(this.customer.email)
     this.userservice.getPlans(this.id).subscribe(
      response => 
      { 
          console.log(`hello`)
          this.plans = response;
          console.log(this.plans);

          // for(let i of this.plans){
          //     if(i.dayLeft<0)
          //     {
          //       i.dayLeft = 0 ;
          //     }
          // }
      }
      
     )
     
      // if(this.color === 'expired')
      // {
      //     this.colorval='gray'
      // }
      // else if(this.color === 'deadline')
      // {
      //   this.colorval='red'
      // }

     
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  getDetails(i:any){
    console.log(i)
    this.sharedata.setplandetails(i);

    this.userservice.getPaymentDetails(i).subscribe(
      (res:any)=>{
        console.log(i)
       this.resp = res;
       console.log(this.resp);
       console.log(this.resp.planName)
       if(this.resp.billStatus === "Bill was paid today"){
        console.log(`bill was paid today`);
        this.userservice.Showwarning("Bill was paid today","!");
       }
       else if(this.resp.billStatus === "You have to wait for minimum 25 days to pay bill"){
        console.log(`wait for 25 days`)
        this.userservice.Showwarning("Bill can be paid only after 25 days","!");

       }
       else{
        this.sharedata.setPaymentPlan(this.resp);
        this.router.navigate(['/payment'])
       }
      }
      )


    
      //this.selected= this.plans[i];
      // console.log(this.selected.planName)
      // console.log(this.selected.speed)
  }
  dummy(i:any)
  {
    console.log(i)
    console.log(this.popobj)
    this.popobj = i;
  }
  showhist()
  {
    this.showhistory = !this.showhistory
  }



  gethistory(){
    this.userservice.getpaymentHistory(this.customer).subscribe(
      response => 
      { 

          
          this.history = response
          for(let i of this.history){
            const format = 'dd/MM/yyyy';  
            const locale = 'en-US';

            i.paymentDate= formatDate(i.paymentDate,format,locale)
            i.dueDate= formatDate(i.dueDate,format,locale)

              console.log(i.paymentDate)
              console.log(i.dueDate)
          }
          console.log(this.history[0].planID)
          console.log(`hello by history`)
          console.log(response[0])
          console.log(response[0].planID)
          console.log(response[0].final_amount)
          console.log(response[0].paymentDate)
          console.log(response[0].paymentType)
          console.log(response[0].dueDate)

          const format = 'dd/MM/yyyy';
          const locale = 'en-US';
          const myDate = '2019-06-29';
          
          const formattedDate = formatDate(myDate, format, locale);

          console.log(formattedDate)
  
      }
     )
  }

  








  
  
}
