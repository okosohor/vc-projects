import { Component } from '@angular/core';
import { CustomButton } from '../../shared/custom-button/custom-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  imports: [CustomButton],
  templateUrl: './order-page.html',
  styleUrl: './order-page.scss',
})
export class OrderPage {
  constructor(private router: Router) {}

  backToOrders() {
    this.router.navigate(['/orders']);
  }
}
