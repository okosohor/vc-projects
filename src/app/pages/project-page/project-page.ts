import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LimitProduct, Product } from 'src/app/entities/product/product.model';
import { ProductService } from 'src/app/entities/product/product.service';
import { Project } from 'src/app/entities/project/project.model';
import { ProjectService } from 'src/app/entities/project/project.service';
import { switchMap, map } from 'rxjs';
import { ProjectPageProductItem } from 'src/app/widgets/project-page-product-item/project-page-product-item';
import { CustomButton } from 'src/app/shared';

@Component({
  selector: 'app-project-page',
  imports: [ProjectPageProductItem, CustomButton],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
})
export class ProjectPage {
  constructor(
    private projectService: ProjectService,
    private productService: ProductService
  ) {}

  projectId = inject(ActivatedRoute).snapshot.params['id'];

  project: Project | undefined = undefined;
  products: {shopifyProduct: Product, product: LimitProduct}[] | undefined = undefined;
  limitProducts: LimitProduct[] | undefined = undefined;

  getVariationAndQuantity(
    productId: number
  ): { variationId: string; quantity: number } | undefined {
    if (!this.limitProducts) return undefined;
    const limitProduct = this.limitProducts.find(
      (lp) => lp.productId === productId.toString()
    );
    if (!limitProduct) return undefined;
    return {
      variationId: limitProduct.variationId,
      quantity: limitProduct.quantity,
    };
  }

  ngOnInit() {
    this.productService.getProjectViewById(this.projectId).subscribe((projectView) => {
      // this.projectView = projectView
      console.log('pro',projectView)
      this.project = projectView.project
      this.products = projectView.products
    })

    // this.projectService.getProjectById(this.projectId).subscribe((project) => {
    //   this.project = project;
    //   console.log(this.project);
    // });

    // this.productService
    //   .getProductsByProjectId(this.projectId)
    //   .subscribe((res) => {
    //     this.limitProducts = res.products;
    //     const ids = res.products.map((p) => p.productId.toString());
    //     this.productService.getProductsByIds(ids).subscribe((productsRes) => {
    //       // this.products = productsRes;
    //       console.log(this.products);
    //     });
    //   });
  }

  deleteProject() {
    console.log(this.projectId)
    this.projectService.deleteProject(this.projectId).subscribe({
      next: () => {
        console.log('Project deleted');
      },
      error: (err) => {
        console.error('Delete failed', err);
      },
    });
  }
}
