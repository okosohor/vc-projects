import { Component, inject } from '@angular/core';
import { CustomButton } from '../../shared/custom-button/custom-button';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/entities/order/order.service';
import { OrderEdge, OrderWithProduct } from 'src/app/entities/order/order.model';

@Component({
  selector: 'app-order-page',
  imports: [CustomButton],
  templateUrl: './order-page.html',
  styleUrl: './order-page.scss',
})
export class OrderPage {
  constructor(
    private router: Router,
    private orderService: OrderService
  ) {}


  order: OrderWithProduct | undefined = undefined
  products: undefined = undefined;
  orderId = inject(ActivatedRoute).snapshot.params['id'];

  ngOnInit() {

    this.orderService.getOrderById(this.orderId).subscribe({
      next: (data) => {
        console.log(data)
        this.order= data.orders.edges[0].node
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  backToOrders() {
    this.router.navigate(['/orders']);
  }
}
