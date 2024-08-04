import { Injectable } from '@angular/core';
import { Users } from '../classDefinition/users';
import { Observable } from 'rxjs';
import { Routerdetails } from '../classDefinition/routerdetails';



@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  



  private paymentPlan:any;
  private acctnumber:number;
  private currentId:String;
  private acctnum:String;
  private phone:String;
  private routers:any; //entire router object
  private routerEach:Routerdetails;
  private plandetails:any;


  constructor() { }

  setprofileusers(id:String){
      this.currentId=id
      //console.log(emailsent)
      const key = 'active'
      const login_id:string = JSON.stringify(this.currentId)
      // console.log(`JSON stringify`)
      // console.log(login_email)
      localStorage.setItem(key,login_id)
  } 


  getprofileusers(){
    return this.currentId
  }


  setAccoutNumber(acctnum:String){
    let numberval: number = +acctnum   //typescript notation to convert string to number
    this.acctnumber=numberval;
  }
  


  getAccountNumber(){
    return this.acctnumber
  }

  getRegAccountNumber(){
    return this.acctnum;
  }

  setRegAccoutNumber(acctnum:String){
    this.acctnum=acctnum;
  }

  setPhoneNumber(phone:String)
  {
    this.phone = phone;
  }

  getPhoneNumber()
  {
    return this.phone;
  }

  setRouterList(routerlist:any)  //sending entire router object
  {
    this.routers = routerlist;
  }

  getRouterList()     // getting entire router object
  {
    return this.routers;
  }

  getrouterEach()
  {
    return this.routerEach;
  }

  setrouterEach(eachrouter:Routerdetails)
  {
    this.routerEach = eachrouter;
  }
  // setEmailandphone(email:String, phone:String)
  // {
  //     this.email = email;
  //     this.phone = phone;
  // }


  setPaymentPlan(i:any){
    this.paymentPlan= i;
  }

  getPaymentPlan(){
    return this.paymentPlan;
  }

  setplandetails(plans: any)
  {
    this.plandetails = plans;
  }
  getplandetails()
  {
    return this.plandetails;
  }



}
