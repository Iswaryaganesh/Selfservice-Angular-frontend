import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { RouterComponent } from '../router/router.component';
import { Routers } from '../router';

@Component({
  selector: 'app-routerpage',
  templateUrl: './routerpage.component.html',
  styleUrls: ['./routerpage.component.css']
})
export class RouterpageComponent {
  planlist = [{"data":"30GB","left":"6.67GB","cost":"401","firmware":"V2.0.1"},{"data":"15GB","left":"7.90GB","cost":"275","firmware":"V2.0.2"},{"data":"70GB","left":"34.34GB","cost":"701","firmware":"V2.1.1"}];
  // routerobj:Routers = new Routers();
  routerlist = [{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planname":"PREMIUM","serial":"0691","firmware":"V2.0.1"},{"model":"AIRTEL","ssid":"WIFI-home1","password":"hello","planname":"BASIC","serial":"0691","firmware":"V2.1.0"},{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planname":"BASIC","serial":"0691","firmware":"V2.1.1"}]
  acctno:String;
  showdescription:Boolean = false

  constructor(private router:Router, private fb:FormBuilder, private sharedata: SharedataService, private userservice: UsersService)
  {

  }

  routerform!:FormGroup;
  ngOnInit():void{
    this.routerform = this.fb.group({
      ssid:['',Validators.required],
      password:['',Validators.required]
    })
    console.log(this.planlist);
  
    this.acctno = this.sharedata.getRegAccountNumber();
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

    displayconfig()
    {
      this.showdescription = !this.showdescription
    }
    
    }

