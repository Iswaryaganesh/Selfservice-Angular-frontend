import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedataService {


  private email:String;


  constructor() { }

  setprofileusers(emailsent:String){
      this.email=emailsent
      console.log(emailsent)
  } 


  getprofileusers(){
    return this.email
  }





}
