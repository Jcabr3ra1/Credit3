// usuario.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = "http://127.0.0.1:8080/usuarios";

  constructor(private httpClient: HttpClient) { }

  obtenerListaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  registrarUsuario(usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  actualizarUsuario(id: string, usuario: Usuario): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  obtenerUsuarioPorId(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }

  eliminarUsuario(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
