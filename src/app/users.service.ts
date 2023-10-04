import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private baseURL = "http://localhost:8080/api/v1/users";
  private baseURL = "http://localhost:8080/api/v1/";
  private userlink = "users";
  private signuplink = "signup";
  private CustomerURL = "http://localhost:8080/api/v1/customers";
  constructor(private httpClient : HttpClient) { 
  }

  loginUser(users:Users):Observable<String>{
    //console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.userlink,users,{responseType: 'text'});
  }


  CustomerValidation(customers:Customers):Observable<String>{
   //console.log(customers)
   return this.httpClient.post(`${this.CustomerURL}`,customers,{responseType: 'text'}); 
  }


  CustomerSignup(users:Users):Observable<String>{
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.signuplink,users,{responseType: 'text'});
  }



}
