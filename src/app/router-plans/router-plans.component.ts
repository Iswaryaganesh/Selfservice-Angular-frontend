import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerPlans } from 'src/classDefinition/routerPlans';
import { UsersService } from '../users.service';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-router-plans',
  templateUrl: './router-plans.component.html',
  styleUrls: ['./router-plans.component.css']
})
export class RouterPlansComponent {
[x: string]: any;

  routerPlans = [{"data":"30GB","left":"10.30GB","cost":"401","daysleft":"15","planname":"BASIC"},{"data":"15GB","left":"7.90GB","cost":"275","daysleft":"25","planname":"BASIC"},{"data":"70GB","left":"34.34GB","cost":"701","daysleft":"12","planname":"PREMIUM"}];
  routerplan:routerPlans[];
  id:String;
  daysleft:number;
  endDate:string;
  usedpercent:number;

  constructor(private router:Router, private userservice:UsersService, private sharedata:SharedataService)
  {
    
  }

  ngOnInit():void{
    let value = localStorage.getItem("active")!
    this.id = JSON.parse(value);
    this.userservice.getPlansofAllRouters(this.id).subscribe(
      response =>
      {
        this.routerplan = response;
      }
    )
    
  }

  addDaysAndFormat(dateString: String, daysToAdd: number): string {
    // Parse the date string assuming it's in DD-MM-YYYY format
    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // Convert month from 1-based to 0-based
  
    // Add the specified number of days
    date.setDate(date.getDate() + daysToAdd);
  
    // Format the date back to DD-MM-YYYY format
    const formattedDay = date.getDate().toString().padStart(2, '0');
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // Convert month back to 1-based
    const formattedYear = date.getFullYear().toString();
  
    return `${formattedDay}-${formattedMonth}-${formattedYear}`;
  }

 daysBetweenDates(startDate:string, endDate: string): number {

  const [startDay, startMonth, startYear] = startDate.split('-').map(Number);
  const [endDay, endMonth, endYear] = endDate.split('-').map(Number);

  // Create date objects
  const date1 = new Date(startYear, startMonth - 1, startDay);
  const date2 = new Date(endYear, endMonth - 1, endDay);
  // Calculate the difference in milliseconds
  const diffInMilliseconds = date2.getTime() - date1.getTime();

  // Convert milliseconds to days
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);

  return diffInDays;
  }

  getCurrentDateFormatted(): string {
    const currentDate = new Date();
  
    // Extract the day, month, and year
    const day = currentDate.getDate().toString().padStart(2, '0');  // Ensure two digits
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = currentDate.getFullYear().toString();
  
    // Format the date as DD-MM-YYYY
    return `${day}-${month}-${year}`;
  }

  calculateDaysLeft(startDate: String,duration: number) {
    this.endDate = this.addDaysAndFormat(startDate,duration);
    console.log("enddate is: ", this.endDate);
    const currentDate = this.getCurrentDateFormatted();
    console.log("curr date: ",currentDate);
    console.log("date curr date: ",new Date(currentDate));

    this.daysleft = this.daysBetweenDates(currentDate, this.endDate);
    console.log("daysleft is: ",this.daysleft);
    }

    setprogress(totaldays: number, daysleft:number){
      const usedDays = totaldays-daysleft;
      this.usedpercent = usedDays/totaldays*100;
      console.log("used percent is ",this.usedpercent,"%");
    }
  
    
  

  

}
