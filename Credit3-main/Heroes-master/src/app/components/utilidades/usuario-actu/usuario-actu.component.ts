import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-actu',
  templateUrl: './usuario-actu.component.html',
  styleUrls: ['./usuario-actu.component.css']
})
export class UsuarioActuComponent implements OnInit {
  usuario: Usuario = { _id: '', seudonimo: '', correo: '', contrasena: '' };

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.usuarioService.obtenerUsuarioPorId(id).subscribe((data) => {
          this.usuario = data;
        });
      }
    });
  }
  irALaListaDeUsuario(){
    this.router.navigate(['/usuarios']);
  }

  actualizarUsuario() {
    this.usuarioService.actualizarUsuario(this.usuario._id, this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
      swal(`Se actualizo con exito ${this.usuario.seudonimo}`);
    });
  }
}
