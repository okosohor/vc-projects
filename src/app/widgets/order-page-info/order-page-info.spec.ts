import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageInfo } from './order-page-info';

describe('OrderPageInfo', () => {
  let component: OrderPageInfo;
  let fixture: ComponentFixture<OrderPageInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPageInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPageInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
