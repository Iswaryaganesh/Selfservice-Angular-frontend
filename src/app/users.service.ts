import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/classDefinition/users';
import { Customers } from '../classDefinition/customers';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Routerdetails } from '../classDefinition/routerdetails';
import { Device } from '../classDefinition/devices';
import { Login } from 'src/classDefinition/Login';
import { mobilePlans } from 'src/classDefinition/mobilePlans';
import { routerPlans } from 'src/classDefinition/routerPlans';
import { simCardWithPlans } from 'src/classDefinition/simcardWithPlans';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  
  
  //private baseURL = "http://localhost:8080/api/v1/users";
  private baseURL = "http://129.159.229.9:8080/api/v1/";
  private userlink = "Login";
  private signuplink = "signup";
  private preparesignup = "signup1"
  private otplink = "otp";
  private otpcheckforforgotpwd = "otpcheck";
  private changepwd = "changepwd";
  private profilelink = "profile";
  private CustomerURL = "http://129.159.229.9:8080/api/v1/customers";
  private forgotlink = "forgotPassword";
  private getsimplans = "simWithPlans"
  private getrouter = "getrouter"
  private UpdateRouter = "updateRouter";
  private connected = "getconnecteddevices";
  private blocked = "getblockeddevices"
  private blockDeviceurl = "blockDevice";
  private unblockDeviceurl = "unblockDevice"
  private deleteDeviceurl = "deleteDevice";
  private payBillDetails = "paybills";
  private paymoney = "payamount";
  private paymentHistory = "getpaymenthistory";
  private fetchCustomerId = "Login/customerId";
  private getPlansOfRouters = "/routerPlans"


  constructor(private httpClient : HttpClient, private toast:ToastrService) { 
  }

  
  loginUser(login:Login):Observable<String>{
    //console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.userlink,login,{responseType: 'text'});
  }


  CustomerValidation(customers:Customers):Observable<String>{
   //console.log(customers)
   return this.httpClient.post(`${this.CustomerURL}`,customers,{responseType: 'text'}); 
  }

  Changepwd(users:Users):Observable<String>{
    //console.log(customers)
    return this.httpClient.post(`${this.baseURL}`+this.changepwd,users,{responseType: 'text'}); 
   }


  CustomerSignup(users:Users):Observable<String>{
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.signuplink,users,{responseType: 'text'});
  }

  CustomersOTP(users:Users):Observable<String>{
    console.log('hello by otp observ');
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.otplink,users,{responseType: 'text'});
  }

  Checkotpforforgotpwd(users:Users):Observable<String>{
    console.log('hello by otp observ');
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.otpcheckforforgotpwd,users,{responseType: 'text'});
  }

  ProfilePage(id:String):Observable<Users>{
    return this.httpClient.get<Users>(`${this.baseURL}`+this.profilelink+'/'+id);
  }

  getPlansofAllRouters(id:String):Observable<routerPlans[]>{
    return this.httpClient.get<routerPlans[]>(`${this.baseURL}`+id+this.getPlansOfRouters);
  }

  fetchId(login:Login):Observable<String>{
    return this.httpClient.post(`${this.baseURL}`+this.fetchCustomerId,login, {responseType: 'text'});
  }

  SetRegpage(customers:Customers):Observable<Customers>
  {
    return this.httpClient.post<Customers>(`${this.baseURL}`+this.preparesignup,customers);
  }

  forgot(user:Users):Observable<String>
  {
    return this.httpClient.post(`${this.baseURL}`+this.forgotlink,user,{responseType: 'text'});
  }

  getPlans(id:String):Observable<simCardWithPlans[]>
  {
    return this.httpClient.get<simCardWithPlans[]>(`${this.baseURL}`+id+'/'+this.getsimplans);
  }

  getRouterDetails(customer:Customers):Observable<Routerdetails[]>{  
    //get router details
    return this.httpClient.post<Routerdetails[]>(`${this.baseURL}`+this.getrouter,customer);
  }



  // private updateurl:String = "http://localhost:8080/api/v1/update/"

  // UpdateRouterDetails(serialNumber:String,router:Routerdetails){
  //   console.log('hello by router update')
  //   console.log(`${this.baseURL}`+serialNumber)
  //   console.log(router.password)
  //   return this.httpClient.put(`${this.updateurl}/${serialNumber}`,router)
  // }


  UpdateRouterDetails(router:Routerdetails){  
    //get router details
    console.log('hello by router update')
    console.log(router.password)
    return this.httpClient.post(`${this.baseURL}`+this.UpdateRouter,router);
  }

  
  getconnectedDetails(router:Routerdetails):Observable<Device[]>{  
    //get router details
    return this.httpClient.post<Device[]>(`${this.baseURL}`+this.connected,router);
  }

  getBlockedDetails(router:Routerdetails):Observable<Device[]>
  {
    return this.httpClient.post<Device[]>(`${this.baseURL}`+this.blocked,router);
  }


  blockDevice(router:Routerdetails):Observable<String>{
    return this.httpClient.post(`${this.baseURL}`+this.blockDeviceurl,router,{responseType: 'text'});

  }

  unblockDevice(router:Routerdetails):Observable<String>{
    return this.httpClient.post(`${this.baseURL}`+this.unblockDeviceurl,router,{responseType: 'text'});

  }

  deleteDevice(router:Routerdetails):Observable<String>{
    return this.httpClient.post(`${this.baseURL}`+this.deleteDeviceurl,router,{responseType: 'text'});
  }

  getPaymentDetails(plan:mobilePlans):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`+this.payBillDetails,plan);
  }


  paybills(details:any):Observable<String>{
    return this.httpClient.post(`${this.baseURL}`+this.paymoney,details,{responseType: 'text'});
  }


  ////////////////payment history part/////////////////////////////////////////
  getpaymentHistory(customers:Customers):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`+this.paymentHistory,customers);
  }

  Showsuccess(title:any, message:any)
  {
    this.toast.success(message, title,{
    })
  }
  Showerror(title:any, message:any)
  {
    this.toast.error(message, title)
  }
  Showwarning(title:any, message:any)
  {
    this.toast.warning(message, title,{
      easing:'ease-in',
    })
  }
  Showinfo(title:any, message:any)
  {
    this.toast.info(message, title,{
      easing:'ease-in'
    })
  }



}
