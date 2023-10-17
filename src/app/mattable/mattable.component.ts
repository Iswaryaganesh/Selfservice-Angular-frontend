import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { Routerdetails } from '../routerdetails';
// export class PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

//const ELEMENT_DATA: Routerdetailsinterface = [{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"PREMIUM","serialNumber":"0691","firmwareVersion":"V2.0.1","ipv4":"168.12.1.1"},{"model":"AIRTEL","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.0","ipv4":"168.12.1.2"},{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.1","ipv4":"168.12.1.1"}]



@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MattableComponent {
  constructor(private router:Router, private sharedata:SharedataService, private userservice:UsersService)
  {
      
  }
  rout:Routerdetails;
  deleteRows:any;

  //devicescoming:Device[];

  public displayedColumns: string[] = ['deviceId','mac','deviceType','blockdetails','deldetails'];
  public dataSource:any=[];

  getallmethod(){
    this.rout = this.sharedata.getrouterEach();
    console.log(this.rout);
    this.userservice.getconnectedDetails(this.rout).subscribe(

      response=>{
        console.log(`welcome`)
        console.log(response)
        // this.devicescoming=response;
        // console.log(this.devicescoming)
        this.dataSource = new MatTableDataSource<any>(response);
        //console.log(this.devicescoming[0].deviceId)

      }  

    );
  }

  
  // ELEMENT_DATA:Routerdetailsinterface[] = this.sharedata.getRouterList();
  
  ngOnInit():void{
    // this.getjson = this.sharedata.getRouterList();
    // this.dataSource = this.getjson;
    // console.log(this.dataSource);  
    console.log('hello')
    this.getallmethod()
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


  deleteRecord(i:any){
    console.log(`hello delete`)
    this.deleteRows= this.dataSource.data.splice(i,1)
    console.log(i);
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
    //console.log(this.deleteRows[i].deviceId)
    console.log(this.deleteRows)
    this.rout.deviceId = this.deleteRows[0].deviceId;
    console.log(this.rout.deviceId)

    this.userservice.deleteDevice(this.rout).subscribe(
      response =>{
        console.log(response)
        this.ngOnInit();
      }

    );

  }

  blockRecord(i:any){
   //window.location.reload;
    console.log(`hello`)
    this.deleteRows= this.dataSource.data.splice(i,1)
    this.dataSource.data.splice(i, 0);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
    //console.log(this.deleteRows[i].deviceId)
    console.log(this.deleteRows);

    console.log(this.rout.deviceId)
    this.rout.deviceId = this.deleteRows[0].deviceId;
    console.log(this.rout.deviceId)


    this.userservice.blockDevice(this.rout).subscribe(
      response =>{
        console.log(response)
      }


    );
  }
 
}

export class Device
{
  deviceType:String;
  mac:String;
  deviceId:String;
  // connectedDevice:number;
  // isBlocked:Boolean;
}




