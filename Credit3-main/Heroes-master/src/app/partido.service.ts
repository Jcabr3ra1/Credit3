// usuario.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from './partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private baseURL = "http://127.0.0.1:9999/partido";

  constructor(private httpClient: HttpClient) { }

  obtenerListaPartidos(): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(`${this.baseURL}`);
  }

  registrarPartido(partido: Partido): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, partido);
  }

  actualizarPartido(id: string, partido: Partido): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, partido);
  }

  obtenerPartidoPorId(id: string): Observable<Partido> {
    return this.httpClient.get<Partido>(`${this.baseURL}/${id}`);
  }

  eliminarPartido(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
