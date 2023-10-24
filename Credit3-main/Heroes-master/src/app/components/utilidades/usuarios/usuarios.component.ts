// usuarios.component.ts
import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id: string) { // Change the type to string
    this.router.navigate(['usuario-actu', id]);
  }
  irALaCrearDeUsuario(){
    this.router.navigate(['/usuario-crear']);
  }

  private obtenerUsuarios() {
    this.usuarioServicio.obtenerListaUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al usuario",
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
        this.usuarioServicio.eliminarUsuario(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerUsuarios();
          swal(
            'Usuario eliminado',
            'El usuario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
