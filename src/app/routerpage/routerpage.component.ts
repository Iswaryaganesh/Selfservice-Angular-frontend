import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { RouterComponent } from '../router/router.component';
import { Routerdetails } from '../routerdetails';
import { Customers } from '../customers';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


// export interface routerlist {
//   model: String;
//   ssid: String;
//   password:String,
//   planName: String;
//   firmwareVersion: String;
//   serialNumber:String;
//   ipv4:String
// }


@Component({
  selector: 'app-routerpage',
  templateUrl: './routerpage.component.html',
  styleUrls: ['./routerpage.component.css'],
  // standalone: true,
  // imports: [MatTableModule]
})


export class RouterpageComponent {
  routerlist = [{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"PREMIUM","serialNumber":"0691","firmwareVersion":"V2.0.1","ipv4":"168.12.1.1"},{"model":"AIRTEL","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.0","ipv4":"168.12.1.2"},{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.1","ipv4":"168.12.1.1"}]
  planlist = [{"data":"30GB","left":"6.67GB","cost":"401","firmware":"V2.0.1"},{"data":"15GB","left":"7.90GB","cost":"275","firmware":"V2.0.2"},{"data":"70GB","left":"34.34GB","cost":"701","firmware":"V2.1.1"}];
  // routerobj:Routers = new Routers();
  selectedRouter:[];
  acctno:String;
  rout:Routerdetails[];
  showdescription:Boolean = false;
  email:String;
  customer:Customers = new Customers();
  ng:Routerdetails;
  passwordcompare:String;
  ssidcompare:String;
  ipv4comapre:String;
  firmwarecomapre:String;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  
  show:Boolean=false;
  password:String;
 
  constructor(private router:Router, private fb:FormBuilder, private userservice: UsersService,private sharedata:SharedataService)
  {

  }


  routerform!:FormGroup;
  ngOnInit():void{
    this.password = 'password';
    this.routerform = this.fb.group({
      ssid:['',Validators.required],
      password:['',Validators.required],
      ipv4:['', Validators.required],firmware:[],serialNumber:[],modelName:[]
    })
    console.log(this.planlist);
    this.sharedata.setRouterList(this.routerlist);
    console.log("set fn:"+this.routerlist)
  
    let value:string=localStorage.getItem("active")!
    console.log(value)
    console.log(typeof(value))
    this.email= JSON.parse(value)
    this.customer.email = this.email;
    console.log(this.customer.email)
    //this.acctno = this.sharedata.getRegAccountNumber();


    this.userservice.getRouterDetails(this.customer).subscribe(
      response => 
      { 
          console.log(`hello`)
          this.rout = response;
          console.log(this.rout);
      }
     )
  }
  
  

    onsubmit()
    {
      if(this.routerform.valid)
      {

      }
      else
      {
        Validateform.validateform(this.routerform);
      }
    }

    selectedTeam:String;
    onSelected(value:String)
    {
        this.selectedTeam = value;
        console.log(this.selectedTeam);
    }

    displayconfig(j:any)
    {
      //console.log(j)
      this.ng=j;
      this.passwordcompare=this.ng.password;
      this.firmwarecomapre=this.ng.firmwareVersion;
      this.ssidcompare = this.ng.ssid;
      this.ipv4comapre = this.ng.ipv4;   
      //console.log(ng.model)
      this.showdescription = true

    }

    closeform()
    {
      this.showdescription = false;
    }
    onClick() {
      this.show = !this.show;
    }
    
    


    updaterouter(){
      console.log(this.ng.ipv4)
      console.log(this.ng.ssid)
      console.log(this.ng.password)
      console.log(this.ng.serialNumber)
      console.log(this.ng.firmwareVersion)

      if(this.ng.password === this.passwordcompare && this.ng.firmwareVersion ===this.firmwarecomapre && this.ng.ipv4 === this.ipv4comapre && this.ng.ssid === this.ssidcompare ){
        console.log(this.ng.password)
        this.userservice.Showwarning("No changes Done","Make changes");
        console.log('no changes')
      }
      else{
        console.log(`chenges can be done`)
        /*
        
        this.userservice.CustomerSignup(this.users).subscribe(
        response =>{
          console.log('good job');
        }  
        );
        
        */ 
        this.userservice.UpdateRouterDetails(this.ng).subscribe(
          response=>{
            
          }
        );
      }
    }
    
    }

