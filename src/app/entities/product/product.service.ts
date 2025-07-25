import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/enviroments/enviroment.prod";
import { LimitProduct, Product } from "./product.model";
import Pagination from "src/app/types/pagintaion";


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

}