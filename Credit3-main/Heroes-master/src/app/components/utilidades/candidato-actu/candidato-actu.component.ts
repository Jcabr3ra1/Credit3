import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from 'src/app/candidato';
import { CandidatoService } from 'src/app/candidato.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-candidato-actu',
  templateUrl: './candidato-actu.component.html',
  styleUrls: ['./candidato-actu.component.css']
})
export class CandidatoActuComponent implements OnInit {
  candidato: Candidato = { _id: '', nombreResolucion: '', nombre: '', apellido: '', inscritos: '' };

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.candidatoService.obtenerCandidatoPorId(id).subscribe((data) => {
          this.candidato = data;
        });
      }
    });
  }
  irALaListaDeCandidato(){
    this.router.navigate(['/candidato']);
  }

  actualizarCandidato() {
    this.candidatoService.actualizarCandidato(this.candidato._id, this.candidato).subscribe(() => {
      this.router.navigate(['/candidato']);
      swal(`Se actualizo con exito ${this.candidato.nombreResolucion}`);
    });
  }
}
