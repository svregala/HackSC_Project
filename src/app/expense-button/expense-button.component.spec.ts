import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseButtonComponent } from './expense-button.component';

describe('ExpenseButtonComponent', () => {
  let component: ExpenseButtonComponent;
  let fixture: ComponentFixture<ExpenseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
