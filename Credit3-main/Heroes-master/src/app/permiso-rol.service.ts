import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PermisoRolService {

  // private baseUrl = 'http://localhost:8080'; // Your Spring Boot backend URL

  constructor() {}

  // Create a relationship between Rol and Permiso (POST request)
  // createRelationship(id_rol: string, id_permiso: string): Observable<any> {
  //  const url = `${this.baseUrl}/permisos-roles/rol/${id_rol}/permiso/${id_permiso}`;
  //  return this.http.post(url, {});
 // }

  // Get a relationship by ID (GET request)
  // getRelationshipById(id: string): Observable<any> {
    // const url = `${this.baseUrl}/permisos-roles/${id}`;
    //return this.http.get(url);
  //}

  // Update a relationship (PUT request)
  //updateRelationship(id: string, id_rol: string, id_permiso: string): Observable<any> {
    //const url = `${this.baseUrl}/permisos-roles/${id}/rol/${id_rol}/permiso/${id_permiso}`;
    //return this.http.put(url, {});
  //}

  // Delete a relationship by ID (DELETE request)
  //deleteRelationship(id: string): Observable<any> {
    //const url = `${this.baseUrl}/permisos-roles/${id}`;
    //return this.http.delete(url);
  //}
}
