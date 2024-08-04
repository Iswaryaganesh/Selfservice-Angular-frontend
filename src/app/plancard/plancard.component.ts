import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-plancard',
  templateUrl: './plancard.component.html',
  styleUrls: ['./plancard.component.css']
})
export class PlancardComponent {
  @ViewChild('cardsContainer', { static: false }) cardsContainer: ElementRef;
  showLeftArrow = false;
  showRightArrow = true;
  showRouterPlans = true;
  showSimPlans = true;
  plans = [
    { name: 'BASIC', price: '$19', users: '1 user', projects: 'Unlimited projects', storage: '2GB storage' },
    { name: 'PREMIUM', price: '$49', users: '10 users', projects: 'Unlimited projects', storage: '20GB storage' },
    { name: 'PREMIUM', price: '$99', users: 'Unlimited users', projects: 'Unlimited projects', storage: '100GB storage' },
    { name: 'BASIC', price: '$49', users: '10 users', projects: 'Unlimited projects', storage: '20GB storage' },
    { name: 'BASIC', price: '$99', users: 'Unlimited users', projects: 'Unlimited projects', storage: '100GB storage' },
    { name: 'BASIC', price: '$49', users: '10 users', projects: 'Unlimited projects', storage: '20GB storage' },
    { name: 'PREMIUM', price: '$99', users: 'Unlimited users', projects: 'Unlimited projects', storage: '100GB storage' },
    { name: 'PREMIUM', price: '$99', users: 'Unlimited users', projects: 'Unlimited projects', storage: '100GB storage' },
    { name: 'BASIC', price: '$49', users: '10 users', projects: 'Unlimited projects', storage: '20GB storage' },
    { name: 'PREMIUM', price: '$99', users: 'Unlimited users', projects: 'Unlimited projects', storage: '100GB storage' }
    // Add more plans as needed
  ];

  constructor(private router:Router, private userservice:UsersService, private sharedata:SharedataService)
  {
    
  }

  selectedItem:String;
  onSelected(value:String)
  {
      this.selectedItem = value;
      console.log(this.selectedItem);
      if(this.selectedItem == 'SIM')
      {
        this.showRouterPlans = true
        this.router.navigateByUrl('/routerpage#viewtable')
      }
      else if(this.selectedItem == 'Router')
      {
        this.showSimPlans = false;
        this.router.navigateByUrl('/routerpage#viewtable')
      }
      else if(this.selectedItem == 'All')
      {
        this.showRouterPlans = true;
        this.showSimPlans = true;
      }
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngAfterViewInit() {
    this.checkArrows(); // Initial check to set arrow visibility correctly
  }

  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => this.checkArrows(), 200); // Check after scroll animation
  }

  scrollRight() {
    this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => this.checkArrows(), 200); // Check after scroll animation
  }

  checkArrows() {
    const container = this.cardsContainer.nativeElement;
    this.showLeftArrow = container.scrollLeft > 0;
    this.showRightArrow = container.scrollLeft < container.scrollWidth - container.clientWidth;
  }

  onScroll(event: WheelEvent) {
    event.preventDefault(); // Prevent the window from scrolling vertically
    const { deltaX, deltaY } = event;
    this.cardsContainer.nativeElement.scrollLeft += deltaY + deltaX; // Scroll horizontally on vertical scroll input
  }

  
}
