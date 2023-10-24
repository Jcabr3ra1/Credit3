import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/rol';
import { RolService } from 'src/app/rol.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-roles-actu',
  templateUrl: './roles-actu.component.html',
  styleUrls: ['./roles-actu.component.css']
})
export class RolesActuComponent implements OnInit {

  rol: Rol = { _id: '', nombre: '', descripcion: ''};

  constructor(
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.rolService.obtenerRolPorId(id).subscribe((data) => {
          this.rol = data;
        });
      }
    });
  }
  irALaListaDeRol(){
    this.router.navigate(['/roles']);
  }

  actualizarRol() {
    this.rolService.actualizarRol(this.rol._id, this.rol).subscribe(() => {
      this.router.navigate(['/roles']);
      swal(`Se actualizo con exito ${this.rol.nombre}`);
    });
  }

}
