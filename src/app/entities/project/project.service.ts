import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';
import { environment } from 'src/enviroments/enviroment.prod';
import Pagination from 'src/app/types/pagintaion';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.baseUrl}/public/project`;

  private http = inject(HttpClient);


  getProjectsByCustomerId(): Observable<{projects:Project[], pagination: Pagination}> {
    return this.http.get<{projects:Project[], pagination: Pagination}>(`${this.apiUrl}?customerId=${environment.userId}`);
  }

  addProject({customerId, name, description}: {customerId: string, name: string, description: string}): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}`, {customerId, name, description});
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
