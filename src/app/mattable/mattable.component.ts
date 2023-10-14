import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { UsersService } from '../users.service';
import { Routerdetails } from '../routerdetails';

export interface Routerdetailsinterface {
  planName : String;
    serialNumber:String;
    model:String;
    firmwareVersion:String;
    ipv4:String;
    ssid:String;
    password:String;
}

//const ELEMENT_DATA: Routerdetailsinterface = [{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"PREMIUM","serialNumber":"0691","firmwareVersion":"V2.0.1","ipv4":"168.12.1.1"},{"model":"AIRTEL","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.0","ipv4":"168.12.1.2"},{"model":"TP-LINK","ssid":"WIFI-home1","password":"hello","planName":"BASIC","serialNumber":"0691","firmwareVersion":"V2.1.1","ipv4":"168.12.1.1"}]

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
  
  // ELEMENT_DATA:Routerdetailsinterface[] = this.sharedata.getRouterList();
  displayedColumns: string[] = ['ssid', 'model', 'firmwareVersion', 'serialNumber'];
  // dataSource = this.ELEMENT_DATA;
  ngOnInit():void{
    // console.log(this.dataSource);
  }
 
}
