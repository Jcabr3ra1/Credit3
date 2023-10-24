import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permiso } from 'src/app/permiso';
import { PermisoService } from 'src/app/permiso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-permisos-actu',
  templateUrl: './permisos-actu.component.html',
  styleUrls: ['./permisos-actu.component.css']
})
export class PermisosActuComponent implements OnInit {

  permiso: Permiso = { _id: '', url: '', metodo: ''};

  constructor(
    private usuarioService: PermisoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.usuarioService.obtenerPermisoPorId(id).subscribe((data) => {
          this.permiso = data;
        });
      }
    });
  }
  irALaListaDePermiso(){
    this.router.navigate(['/permisos']);
  }
  actualizarPermiso() {
    this.usuarioService.actualizarPermiso(this.permiso._id, this.permiso).subscribe(() => {
      this.router.navigate(['/permisos']);
      swal(`Se actualizo con exito ${this.permiso.url}`);
    });
  }

}
