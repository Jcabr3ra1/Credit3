import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from 'src/app/partido';
import { PartidoService } from 'src/app/partido.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-partido-actu',
    templateUrl: './partido-actu.component.html',
    styleUrls: ['./partido-actu.component.css']
})

export class PartidoActuComponent implements OnInit {
    partido: Partido = { _id: '', nombrePatido: '', lema: '', inscritos: '' };
  
    constructor(
      private partidoService: PartidoService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.partidoService.obtenerPartidoPorId(id).subscribe((data) => {
            this.partido = data;
          });
        }
      });
    }
    irALaListaDePartido(){
      this.router.navigate(['/partido']);
    }
  
    actualizarPartido() {
      this.partidoService.actualizarPartido(this.partido._id, this.partido).subscribe(() => {
        this.router.navigate(['/partido']);
        swal(`Se actualizo con exito ${this.partido.nombrePatido}`);
      });
    }
  }