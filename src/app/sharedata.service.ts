import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private acctnumber:number;
  private email:String;


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



}
