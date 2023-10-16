import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';
import { Routerdetails } from './routerdetails';



@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private acctnumber:number;
  private email:String;
  private acctnum:String;
  private phone:String;
  private routers:any; //entire router object
  private routerEach:Routerdetails;


  constructor() { }

  setprofileusers(emailsent:String){
      this.email=emailsent
      //console.log(emailsent)
      const key = 'active'
      const login_email:string = JSON.stringify(this.email)
      // console.log(`JSON stringify`)
      // console.log(login_email)
      localStorage.setItem(key,login_email)
  } 


  getprofileusers(){
    return this.email
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




}
