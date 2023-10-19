import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  constructor(private router: Router)
  {
    
  }

  display:any=[false,false,false,false,false];
  displaypara(i:number)
  {
      this.display[i] = !this.display[i];
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
