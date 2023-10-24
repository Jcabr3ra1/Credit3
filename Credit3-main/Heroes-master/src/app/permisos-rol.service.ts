import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { PermisosRol } from './permisos-rol';


@Injectable({
  providedIn: 'root'
})
export class PermisosRolService {

  private apiUrl = 'http://localhost:8080/permisos-roles'; // Reemplaza con la URL del backend

  constructor(private http: HttpClient) { }
  // Dentro del servicio
  createAssignment(idRol: string, idPermiso: string): Observable<PermisosRol> {
    return this.http.post<PermisosRol>(
      `${this.apiUrl}/rol/${idRol}/permiso/${idPermiso}`,
      {}
    ).pipe(
      catchError(error => {
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error.
        return throwError(error);
      })
    );
  }
  // Método para obtener una asignación de rol y permiso por ID
  getAssignmentById(id: string): Observable<PermisosRol> {
    return this.http.get<PermisosRol>(`${this.apiUrl}/${id}`);
  }

  updateAssignment(id: string, idRol: string, idPermiso: string): Observable<PermisosRol> {
    return this.http.put<PermisosRol>(
      `${this.apiUrl}/${id}/rol/${idRol}/permiso/${idPermiso}`,
      {}
    );
  }

  deleteAssignment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
