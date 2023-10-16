import { Component, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Customers } from '../customers';
import { SharedataService } from '../sharedata.service';
import { Plans } from '../plans';



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  //clickedIndex:number;
  planlist = [{"data":"30GB","left":"10GB","cost":"401","daysleft":"15","planname":"BASIC"},{"data":"15GB","left":"7.90GB","cost":"275","daysleft":"25","planname":"BASIC"},{"data":"70GB","left":"34.34GB","cost":"701","daysleft":"12","planname":"PREMIUM"}];
  email:String;
  popobj:any;
  used:number
  show:boolean=true
  val:number
  
  setuseddata(a:any,b:any)
  {
    a = a.substring(0, a.length - 2);
    b = b.substring(0, b.length - 2);
    this.used = (+a - +b)/a*100;
    this.val = +b*100/+a
    console.log("used:" +this.val)
  }
  
  customer:Customers = new Customers();
  plans:Plans[];
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
    this.email= JSON.parse(value)
    this.customer.email = this.email;
    console.log(this.customer.email)
     this.userservice.getPlans(this.customer).subscribe(
      response => 
      { 
          console.log(`hello`)
          this.plans = response;
          console.log(this.plans);
      }
     )
     
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  getDetails(i:any){
    console.log(i)
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
  
  
}
