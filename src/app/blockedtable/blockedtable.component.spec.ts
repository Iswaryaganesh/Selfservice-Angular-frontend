import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedtableComponent } from './blockedtable.component';

describe('BlockedtableComponent', () => {
  let component: BlockedtableComponent;
  let fixture: ComponentFixture<BlockedtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedtableComponent]
    });
    fixture = TestBed.createComponent(BlockedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
