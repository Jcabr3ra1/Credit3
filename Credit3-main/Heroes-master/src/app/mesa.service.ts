// mesa.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from './mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private baseURL = "http://127.0.0.1:9999/mesas";

  constructor(private httpClient: HttpClient) { }

  obtenerListaMesas(): Observable<Mesa[]> {
    return this.httpClient.get<Mesa[]>(`${this.baseURL}`);
  }

  registrarMesa(mesa: Mesa): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, mesa);
  }

  actualizarMesa(id: string, mesa: Mesa): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, mesa);
  }

  obtenerMesaPorId(id: string): Observable<Mesa> {
    return this.httpClient.get<Mesa>(`${this.baseURL}/${id}`);
  }

  eliminarMesa(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
