import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private acctnumber:number;
  private email:String;
  private acctnum:String;
  private phone:String;


  constructor() { }

  setprofileusers(emailsent:String){
      this.email=emailsent
      console.log(emailsent)
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

  // setEmailandphone(email:String, phone:String)
  // {
  //     this.email = email;
  //     this.phone = phone;
  // }



}
