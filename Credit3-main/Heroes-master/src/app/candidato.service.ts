// usuario.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseURL = "http://127.0.0.1:9999/candidatos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaCandidato(): Observable<Candidato[]> {
    return this.httpClient.get<Candidato[]>(`${this.baseURL}`);
  }

  registrarCandidato(candidato: Candidato): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, candidato);
  }

  actualizarCandidato(id: string, candidato: Candidato): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, candidato);
  }

  obtenerCandidatoPorId(id: string): Observable<Candidato> {
    return this.httpClient.get<Candidato>(`${this.baseURL}/${id}`);
  }

  eliminarCandidato(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
