import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { Routerdetails } from '../routerdetails';

@Component({
  selector: 'app-blockedtable',
  templateUrl: './blockedtable.component.html',
  styleUrls: ['./blockedtable.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class BlockedtableComponent {
    constructor(private router:Router, private sharedata:SharedataService, private userservice:UsersService)
    {
        
    }
    rout:Routerdetails;
  
    public displayedColumns: string[] = ['deviceId','mac','deviceType','connectedDevice','isBlocked'];
    public dataSource:any;
  
    getallmethod(){
      this.rout = this.sharedata.getrouterEach();
      console.log(this.rout);
      this.userservice.getBlockedDetails(this.rout).subscribe(
  
        response=>{
  
          console.log(response)
          this.dataSource = response;
  
        }  
  
      );
    }

  ngOnInit():void{
    this.getallmethod()
  }
}
