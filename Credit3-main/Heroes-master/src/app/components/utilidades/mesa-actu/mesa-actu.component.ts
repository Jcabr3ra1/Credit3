import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from 'src/app/mesa';
import { MesaService } from 'src/app/mesa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mesa-actu',
  templateUrl: './mesa-actu.component.html',
  styleUrls: ['./mesa-actu.component.css']
})
export class MesaActuComponent implements OnInit {
  mesa: Mesa = { _id: '', numMesas: '', inscritos: ''};

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.mesaService.obtenerMesaPorId(id).subscribe((data) => {
          this.mesa = data;
        });
      }
    });
  }
  irALaListaDeMesa(){
    this.router.navigate(['/mesa']);
  }

  actualizarMesa() {
    this.mesaService.actualizarMesa(this.mesa._id, this.mesa).subscribe(() => {
      this.router.navigate(['/mesa']);
      swal(`Se actualizo con exito ${this.mesa.numMesas}`);
    });
  }
}
