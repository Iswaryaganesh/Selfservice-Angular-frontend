import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  billing_faqs = [{question:"Q1. How does the billing cycle work?", answer: "We follow a 30 day billing cycle you will be able to pay your bills from 25th day. You will be charged on pro-rata basis from day 25 ,and your next due date will be increased by 30 days."},
    {question:'Q2. If usage has exceeded the chosen limit as per plan,would I be charged extra for my additional usage?', answer:'Yes the user will be charged additional 1₹ per 1 GB of additional usage from their respective plans'},
    {question:'Q3. Can I change my router settings from my website', answer:' Yes you can change some of your router settings from your website portal like wifi ssid,password,firmware update etc.'},
    {question:'Q4. Would changing my router password in website remove all the devices connected to my router.', answer:' Yes updation of password will automatically remove all the devices connected to your wifi.'},
    {question:'Q5. Do I Have to pay a fine if I fail to pay my plan bill within time.', answer:'The user will be charged a additional 100₹ fine if they fail to pay their bill.The user will have a 4 day window to pay their bills without the addtitonal fine after which 100₹ fine will be added to their bills.'}
  ]

  router_faqs = [
    {question:'Q1. If usage has exceeded the chosen limit as per plan,would I be charged extra for my additional usage?', answer:'Yes the user will be charged additional 1₹ per 1 GB of additional usage from their respective plans'},
    {question:'Q2. Can I change my router settings from my website', answer:' Yes you can change some of your router settings from your website portal like wifi ssid,password,firmware update etc.'},
    {question:'Q3. Would changing my router password in website remove all the devices connected to my router.', answer:' Yes updation of password will automatically remove all the devices connected to your wifi.'},
    {question:'Q4. Do I Have to pay a fine if I fail to pay my plan bill within time.', answer:'The user will be charged a additional 100₹ fine if they fail to pay their bill.The user will have a 4 day window to pay their bills without the addtitonal fine after which 100₹ fine will be added to their bills.'},
    {question:"Q5. How does the billing cycle work?", answer: "We follow a 30 day billing cycle you will be able to pay your bills from 25th day. You will be charged on pro-rata basis from day 25 ,and your next due date will be increased by 30 days."}
  ]

  sim_faqs = [
    {question:'Q1. Can I change my router settings from my website', answer:' Yes you can change some of your router settings from your website portal like wifi ssid,password,firmware update etc.'},
    {question:'Q2. Would changing my router password in website remove all the devices connected to my router.', answer:' Yes updation of password will automatically remove all the devices connected to your wifi.'},
    {question:'Q3. Do I Have to pay a fine if I fail to pay my plan bill within time.', answer:'The user will be charged a additional 100₹ fine if they fail to pay their bill.The user will have a 4 day window to pay their bills without the addtitonal fine after which 100₹ fine will be added to their bills.'},
    {question:"Q4. How does the billing cycle work?", answer: "We follow a 30 day billing cycle you will be able to pay your bills from 25th day. You will be charged on pro-rata basis from day 25 ,and your next due date will be increased by 30 days."},
    {question:'Q5. If usage has exceeded the chosen limit as per plan,would I be charged extra for my additional usage?', answer:'Yes the user will be charged additional 1₹ per 1 GB of additional usage from their respective plans'}
  ]

  profile_faqs = [
    {question:'Q1. Would changing my router password in website remove all the devices connected to my router.', answer:' Yes updation of password will automatically remove all the devices connected to your wifi.'},
    {question:'Q2. Do I Have to pay a fine if I fail to pay my plan bill within time.', answer:'The user will be charged a additional 100₹ fine if they fail to pay their bill.The user will have a 4 day window to pay their bills without the addtitonal fine after which 100₹ fine will be added to their bills.'},
    {question:"Q3. How does the billing cycle work?", answer: "We follow a 30 day billing cycle you will be able to pay your bills from 25th day. You will be charged on pro-rata basis from day 25 ,and your next due date will be increased by 30 days."},
    {question:'Q4. If usage has exceeded the chosen limit as per plan,would I be charged extra for my additional usage?', answer:'Yes the user will be charged additional 1₹ per 1 GB of additional usage from their respective plans'},
    {question:'Q5. Can I change my router settings from my website', answer:' Yes you can change some of your router settings from your website portal like wifi ssid,password,firmware update etc.'}
  ]
  
  constructor(private router: Router)
  {
    
  }

  display:any=[false,false,false,false,false];
  display_bill:boolean = false;
  router_display: boolean = false;
  sim_display: boolean = false;
  profile_display:boolean = false;
  faqtype:String = 'Billing';
  isActive:any = [true,false,false,false];
  displaypara(i:number)
  {
      this.display[i] = !this.display[i];
  }
  display_billing(){
    this.display_bill = true;
    this.router_display = false;
    this.sim_display = false;
    this.profile_display = false;
    this.faqtype = 'Billing';
    this.isActive = [true,false,false,false];

  }
  display_router(){
    this.router_display = true;
    this.sim_display = false;
    this.profile_display = false;
    this.display_bill = false;
    this.faqtype = 'Router';
    this.isActive = [false,true,false,false];
  }
  display_sim(){
    this.sim_display = true;
    this.profile_display = false;
    this.display_bill = false;
    this.router_display = false;
    this.faqtype = 'Sim Card';
    this.isActive = [false,false,true,false];
  }
  display_profile(){
    this.profile_display = true;
    this.display_bill = false;
    this.router_display = false;
    this.sim_display = false;
    this.faqtype = 'Profile';
    this.isActive = [false,false,false,true];
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  getFaqType(){
    switch(this.faqtype){
      case 'Router':
        return this.router_faqs
      case 'Sim Card':
        return this.sim_faqs
      case 'Profile':
        return this.profile_faqs
      default:
        return this.billing_faqs
    }
  }
}
