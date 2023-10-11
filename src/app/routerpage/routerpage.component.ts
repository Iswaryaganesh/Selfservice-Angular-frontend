import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-routerpage',
  templateUrl: './routerpage.component.html',
  styleUrls: ['./routerpage.component.css']
})
export class RouterpageComponent {
  routerobj:Router = new Router();
  acctno:String;
  planlist = [{"data":"30GB","left":"6.67GB","cost":"401"},{"data":"15GB","left":"7.90GB","cost":"275"},{"data":"70GB","left":"34.34GB","cost":"701"}];

  constructor(private router:Router, private fb:FormBuilder, private sharedata: SharedataService, private userservice: UsersService)
  {

  }

  routerform!:FormGroup;
  ngOnInit():void{
    this.routerform = this.fb.group({
      ssid:['',Validators.required],
      password:['',Validators.required]
    })
  
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
    
    }

