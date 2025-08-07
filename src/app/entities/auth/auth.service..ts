import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment.prod';
import Pagination from 'src/app/types/pagintaion';
import { LoginResponse, RegisterData } from './auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private apiUrl = `${environment.baseUrl}/shopify/storefront`;

  private http = inject(HttpClient);


  login(email:string, password:string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {email, password});
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  register(data: RegisterData): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/register`, data);
  }
}
