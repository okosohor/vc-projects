import { Component } from '@angular/core';
import { OrderCard } from '../order-card/order-card';
import { ORDERS } from '../../../mock-data/orders';
import { CommonModule } from '@angular/common';
import { OrderPageInfo } from '../order-page-info/order-page-info';

@Component({
  selector: 'app-orders-list',
  imports: [
    OrderCard,
    CommonModule,
    OrderPageInfo
  ],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss'
})
export class OrdersList {
  orders = ORDERS;
}
