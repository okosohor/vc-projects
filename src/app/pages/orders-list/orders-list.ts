import { Component } from '@angular/core';
import { OrderCard } from '../../widgets/order-card/order-card';
import { ORDERS } from '../../../mock-data/orders';
import { CommonModule } from '@angular/common';
import { OrderPageInfo } from '../../widgets/order-page-info/order-page-info';
import { OrderService } from 'src/app/entities/order/order.service';
import { OrderEdge, OrdersResponse } from 'src/app/entities/order/order.model';

@Component({
  selector: 'app-orders-list',
  imports: [OrderCard, CommonModule, OrderPageInfo],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss',
})
export class OrdersList {
  constructor(private orderService: OrderService) {}
  orders: OrderEdge[] = [];


  ngOnInit() {
    this.orderService.getOrdersByUserToken().subscribe({
      next:(data: OrdersResponse) =>{
        this.orders = data.orders.edges
        console.log(data)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
