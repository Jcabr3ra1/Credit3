import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from './rol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private baseURL = "http://127.0.0.1:8080/roles";

  constructor(private httpClient: HttpClient) { }

  obtenerListaRoles(): Observable<Rol[]> {
    return this.httpClient.get<Rol[]>(`${this.baseURL}`);
  }

  registrarRol(rol: Rol): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, rol);
  }

  actualizarRol(id: string, rol: Rol): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, rol);
  }

  obtenerRolPorId(id: string): Observable<Rol> {
    return this.httpClient.get<Rol>(`${this.baseURL}/${id}`);
  }

  eliminarRol(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
