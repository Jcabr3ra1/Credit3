import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermisosRol } from 'src/app/permisos-rol';
import { PermisosRolService } from 'src/app/permisos-rol.service';

@Component({
  selector: 'app-permisos-roles',
  templateUrl: './permisos-roles.component.html',
  styleUrls: ['./permisos-roles.component.css']
})
export class PermisosRolesComponent implements OnInit {
  assignmentId: any;
  newIdRol: any; // Agregar esta variable
  newIdPermiso: any; // Agregar esta variable
  constructor(private permisosRolesService: PermisosRolService) {}
  idRol: string = '';
  idPermiso: string = '';

  // Mensajes para mostrar al usuario
  successMessage: string = '';
  errorMessage: string = '';

  ngOnInit() {}

  createAssignment() {
    this.permisosRolesService.createAssignment(this.idRol, this.idPermiso).subscribe(
      (result) => {
        this.successMessage = 'Asignación creada con éxito.';
        this.errorMessage = '';
      },
      (error) => {        
        this.errorMessage = 'Error al crear la asignación. Verifique los datos y vuelva a intentarlo.';
      }
    );
  }

  getAssignment(id: string) {
    this.permisosRolesService.getAssignmentById(id).subscribe(
      (assignment) => {
        // Actualizar la vista o hacer algo con la asignación si es necesario
        
      },
      (error) => {
        this.errorMessage = 'Error al obtener la asignación. Asegúrese de que el ID sea válido.';
      }
    );
  }

  updateAssignment(id: string) {
    this.permisosRolesService.updateAssignment(id, this.idRol, this.idPermiso).subscribe(
      (result) => {
        this.successMessage = 'Asignación actualizada con éxito.';
        
      },
      (error) => {
        this.errorMessage = 'Error al actualizar la asignación. Verifique los datos y vuelva a intentarlo.';
      }
    );
  }

  deleteAssignment(id: string) {
    this.permisosRolesService.deleteAssignment(id).subscribe(
      () => {
        this.successMessage = 'Asignación eliminada con éxito.';        
      },
      (error) => {
        this.errorMessage = 'Error al eliminar la asignación. Asegúrese de que el ID sea válido.';
      }
    );
  }

}
