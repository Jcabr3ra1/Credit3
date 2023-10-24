import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/rol';
import { RolService } from 'src/app/rol.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-roles-crear',
  templateUrl: './roles-crear.component.html',
  styleUrls: ['./roles-crear.component.css']
})
export class RolesCrearComponent implements OnInit {

  rol : Rol = new Rol();
  constructor(private usuarioServicio: RolService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarRol(){
    this.usuarioServicio.registrarRol(this.rol).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeRol();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.rol.nombre}`);
  }
  irALaListaDeRol(){
    this.router.navigate(['/roles']);
  }
  onSubmit(){
    this.guardarRol()
  }

}
