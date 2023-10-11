import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterpageComponent } from './routerpage.component';

describe('RouterpageComponent', () => {
  let component: RouterpageComponent;
  let fixture: ComponentFixture<RouterpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterpageComponent]
    });
    fixture = TestBed.createComponent(RouterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
