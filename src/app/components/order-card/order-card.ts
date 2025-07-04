import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { Router } from '@angular/router';

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


  @Input() order!: {
    id:number,
    date:string,
    tracking:string,
    number:number,
    goods:
    {
      id:number,
      title:string,
      price:number
    }[]
  };

  get total(): number {
    return this.order.goods.reduce((sum, item) => sum + item.price, 0);
  }

  goToOrder(id: number) {
    this.router.navigate(['/orders', id]);
  }
}
