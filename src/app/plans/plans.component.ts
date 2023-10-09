import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {

  planlist = [{"data":"30GB","left":"6.67GB","cost":"401"},{"data":"15GB","left":"7.90GB","cost":"275"},{"data":"70GB","left":"34.34GB","cost":"701"}];
}
