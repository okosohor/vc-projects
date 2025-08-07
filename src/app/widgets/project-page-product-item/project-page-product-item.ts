import { Component, Input } from '@angular/core';
import { LimitProduct, Product } from 'src/app/entities/product/product.model';

@Component({
  selector: 'app-project-page-product-item',
  imports: [],
  templateUrl: './project-page-product-item.html',
  styleUrl: './project-page-product-item.scss',
})
export class ProjectPageProductItem {
  @Input() product!: {shopifyProduct:Product, product:LimitProduct};
  // @Input() variationId!: string | undefined;
  // @Input() quantity!: number | undefined;

  image: string | undefined =  undefined ;

  getProductUrl() {
    return `https://vcgallery-test.myshopify.com/products/${this.product.shopifyProduct.handle}`;
  }

  getProductVariation() {
    return this.product.shopifyProduct.variants.find((v) => v.id.toString() === (this.product.product.variationId));
  }

  findVariantImage() {
    return this.product.shopifyProduct.images.find(image => image.variantIds?.includes(Number(this.product.product.variationId)))?.src
  }

  ngOnInit() {
    console.log(this.findVariantImage() , this.product.shopifyProduct.image.src)
    this.image = this.findVariantImage() || this.product.shopifyProduct.image.src
    // console.log(this.product.product.variationId);
    // console.log(this.getProductVariation());
    // console.log('image' ,this.findVariantImage())
  }
}
