import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInitialsComponent } from './customer-initials.component';

describe('CustomerInitialsComponent', () => {
  let component: CustomerInitialsComponent;
  let fixture: ComponentFixture<CustomerInitialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInitialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
