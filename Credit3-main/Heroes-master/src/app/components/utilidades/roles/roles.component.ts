import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/rol';
import { RolService } from 'src/app/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[];

  constructor(private rolServicio: RolService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerRoles();
  }

  actualizarRol(id: string) {
    this.router.navigate(['roles-actu', id]);
  }

  private obtenerRoles() {
    this.rolServicio.obtenerListaRoles().subscribe(data => {
      this.roles = data;
    });
  }
  irALaCrearDeRol(){
    this.router.navigate(['/roles-crear']);
  }

  eliminarRol(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al rol",
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
        this.rolServicio.eliminarRol(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerRoles();
          swal(
            'Rol eliminado',
            'El rol ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
