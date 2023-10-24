import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private usuarioServicio: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeUsuario();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.usuario.seudonimo}`);
  }
  irALaListaDeUsuario(){
    this.router.navigate(['/usuarios']);
  }
  onSubmit(){
    this.guardarUsuario()
  }
}
