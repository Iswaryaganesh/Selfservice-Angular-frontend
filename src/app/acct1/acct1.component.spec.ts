import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acct1Component } from './acct1.component';

describe('Acct1Component', () => {
  let component: Acct1Component;
  let fixture: ComponentFixture<Acct1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acct1Component]
    });
    fixture = TestBed.createComponent(Acct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
