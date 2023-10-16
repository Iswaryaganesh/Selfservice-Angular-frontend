import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  display:any=[false,false,false,false,false,false,false,false,false,false];
  displaypara(i:number)
  {
      this.display[i] = !this.display[i];
  }
}
