import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { Routerdetails } from '../../classDefinition/routerdetails';

@Component({
  selector: 'app-blockedtable',
  templateUrl: './blockedtable.component.html',
  styleUrls: ['./blockedtable.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class BlockedtableComponent {

    deleteRows:any;
    constructor(private router:Router, private sharedata:SharedataService, private userservice:UsersService)
    {
        
    }
    rout:Routerdetails;
  
    public displayedColumns: string[] = ['deviceId','mac','deviceType','blockdetails','deldetails'];
    public dataSource:any;
  
    getallmethod(){
      this.rout = this.sharedata.getrouterEach();
      console.log(this.rout);
      this.userservice.getBlockedDetails(this.rout).subscribe(
  
        response=>{
  
          console.log(response)
          console.log(`welcome`)
          this.dataSource = new MatTableDataSource<any>(response);

        }  
  
      );
    }

  ngOnInit():void{
    console.log('hello')
    this.getallmethod()
  }


  
  deleteRecord(i:any){
    console.log(`hello`)
    this.deleteRows= this.dataSource.data.splice(i,1)
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
    console.log(this.deleteRows[0].deviceId)
    console.log(this.deleteRows);

    this.rout.deviceId = this.deleteRows[0].deviceId;
    console.log(this.rout.deviceId)

    this.userservice.deleteDevice(this.rout).subscribe(
      response =>{
        console.log(response)
        this.ngOnInit();
      }

    );

  }

  unblockRecord(i:any){
    console.log(`hello`)
    this.deleteRows= this.dataSource.data.splice(i,1)
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
    // console.log(this.deleteRows[i].deviceId)
    console.log("index for unblock"+i)
    console.log(this.deleteRows);
    //console.log(this.rout.deviceId)
    this.rout.deviceId = this.deleteRows[0].deviceId;
    console.log(this.rout.deviceId)


    this.userservice.unblockDevice(this.rout).subscribe(
      response =>{
        console.log(response)
      }


    );
  }
}
