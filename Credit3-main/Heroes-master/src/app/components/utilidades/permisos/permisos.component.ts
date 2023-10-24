import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permiso } from 'src/app/permiso'; // Correct import statement
import { PermisoService } from 'src/app/permiso.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {
  permisos: Permiso[]; // Define 'permisos' as an array of Permiso objects

  constructor(private permisoServicio: PermisoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPermisos();
  }

  actualizarPermiso(id: string) {
    this.router.navigate(['permisos-actu', id]);
  }

  private obtenerPermisos() {
    this.permisoServicio.obtenerListaPermisos().subscribe(data => {
      this.permisos = data;
    });
  }
  irALaListaDePermiso(){
    this.router.navigate(['/permisos']);
  }
  irALaCrearDePermiso(){
    this.router.navigate(['/permisos-crear']);
  }

  eliminarPermiso(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al permiso",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.permisoServicio.eliminarPermiso(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerPermisos();
          swal(
            'Permiso eliminado',
            'El permiso ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
