import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/enviroments/enviroment.prod";
import Pagination from "src/app/types/pagintaion";
import { Project } from "../project/project.model";
import { OrderWithProductResponse, OrdersResponse } from "./order.model";


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = `${environment.baseUrl}/shopify/storefront`;

  private http = inject(HttpClient);

  token = localStorage.getItem('token');

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getOrdersByUserToken(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`${this.apiUrl}/orders`, {
      headers: this.getHeaders()
    })
  }

  getOrderById(id:string): Observable<OrderWithProductResponse> {
    return this.http.get<OrderWithProductResponse>(`${this.apiUrl}/orders/${id}?first=10`, {
      headers: this.getHeaders()
    })
  }


 //getOrderById
}