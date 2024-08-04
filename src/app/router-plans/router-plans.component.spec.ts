import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPlansComponent } from './router-plans.component';

describe('RouterPlansComponent', () => {
  let component: RouterPlansComponent;
  let fixture: ComponentFixture<RouterPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterPlansComponent]
    });
    fixture = TestBed.createComponent(RouterPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
