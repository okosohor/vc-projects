import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { Router } from '@angular/router';
import { OrderEdge } from 'src/app/entities/order/order.model';

@Component({
  selector: 'app-order-card',
  imports: [
    CommonModule,
    CustomButton
],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss',
  standalone: true,
})
export class OrderCard {
  constructor(private router: Router) {}

  @Input() order!: OrderEdge;



  // get total(): number {
    //   return this.order.goods.reduce((sum, item) => sum + item.price, 0);
    // }

  goToOrder() {
    const orderId = (this.order.node.id.split('?')[0].split('/').at(-1))
    this.router.navigate(['/orders', orderId]);
  }
}
