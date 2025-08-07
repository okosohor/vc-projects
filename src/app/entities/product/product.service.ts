import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/enviroments/enviroment.prod";
import { LimitProduct, Product } from "./product.model";
import Pagination from "src/app/types/pagintaion";
import { Project } from "../project/project.model";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = `${environment.baseUrl}/public/product`;
  private adminApiUrl = `${environment.baseUrl}/shopify/admin/products`;

  private http = inject(HttpClient);


  getProductsByIds(ids: string[]): Observable<Product[]> {
    const preparedIds = ids.join(',')
    return this.http.get<Product[]>(`${this.adminApiUrl}/by-ids?ids=${preparedIds}`);
  }

  getProductsByProjectId(projectId:string): Observable<{products:LimitProduct[], pagination: Pagination}> {
    return this.http.get<{products:LimitProduct[], pagination: Pagination}>(`${this.apiUrl}?projectId=${projectId}`);
  }


  getProjectViewById(id: string): Observable<{project:Project ,products:{product:LimitProduct , shopifyProduct: Product}[], pagination: Pagination}> {
    return this.http.get<{project:Project , products:{product:LimitProduct , shopifyProduct: Product}[], pagination: Pagination}>(`${environment.baseUrl}/product/view?projectId=${id}&limit=10&offset=0&sortField=createdAt&sortOrder=asc`);
    // /v1/product/view?projectId=30f2bab6-e0c2-4fda-bdbb-e2f678ec4f9a&limit=10&offset=0&sortField=createdAt&sortOrder=asc
  }
}