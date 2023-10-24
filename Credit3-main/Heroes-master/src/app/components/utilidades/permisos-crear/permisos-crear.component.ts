import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permiso } from 'src/app/permiso';
import { PermisoService } from 'src/app/permiso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-permisos-crear',
  templateUrl: './permisos-crear.component.html',
  styleUrls: ['./permisos-crear.component.css']
})
export class PermisosCrearComponent implements OnInit {

  permiso : Permiso = new Permiso();
  constructor(private permisoServicio: PermisoService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarPermiso(){
    this.permisoServicio.registrarPermiso(this.permiso).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePermiso();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.permiso.url}`);
  }
  irALaListaDePermiso(){
    this.router.navigate(['/permisos']);
  }
  onSubmit(){
    this.guardarPermiso()
  }

}
