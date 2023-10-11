import { Component } from '@angular/core';
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
  email:String;
  customer:Customers = new Customers();
  plans:Plans[];
  selected:Plans = new Plans();
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

  getDetails(i:any){
    console.log(i)
      //this.selected= this.plans[i];
      // console.log(this.selected.planName)
      // console.log(this.selected.speed)
  }

  planlist = [{"data":"30GB","left":"6.67GB","cost":"401"},{"data":"15GB","left":"7.90GB","cost":"275"},{"data":"70GB","left":"34.34GB","cost":"701"}];
}
