import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entities/product/product.model';

@Component({
  selector: 'app-project-page-product-item',
  imports: [],
  templateUrl: './project-page-product-item.html',
  styleUrl: './project-page-product-item.scss',
})
export class ProjectPageProductItem {
  @Input() product!: Product;
  @Input() variationId!: string | undefined;
  @Input() quantity!: number | undefined;

  getProductUrl() {
    return `https://vcgallery-test.myshopify.com/products/${this.product.handle}`;
  }

  getProductVariation() {
    return this.product.variants.find((v) => v.id === (this.variationId ? +this.variationId  : 0));
  }

  ngOnInit() {
    console.log(this.product,this.variationId);
    console.log(this.getProductVariation());
  }
}
