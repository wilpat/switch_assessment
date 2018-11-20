import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAdminComponent } from './customers-admin.component';

describe('CustomersAdminComponent', () => {
  let component: CustomersAdminComponent;
  let fixture: ComponentFixture<CustomersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
