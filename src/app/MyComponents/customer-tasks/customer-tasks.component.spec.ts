import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTasksComponent } from './customer-tasks.component';

describe('CustomerTasksComponent', () => {
  let component: CustomerTasksComponent;
  let fixture: ComponentFixture<CustomerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
