import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permiso } from './permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  private baseURL = "http://127.0.0.1:8080/permisos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaPermisos(): Observable<Permiso[]> {
    return this.httpClient.get<Permiso[]>(`${this.baseURL}`);
  }

  registrarPermiso(permiso: Permiso): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, permiso);
  }

  actualizarPermiso(id: string, permiso: Permiso): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, permiso);
  }

  obtenerPermisoPorId(id: string): Observable<Permiso> {
    return this.httpClient.get<Permiso>(`${this.baseURL}/${id}`);
  }

  eliminarPermiso(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
