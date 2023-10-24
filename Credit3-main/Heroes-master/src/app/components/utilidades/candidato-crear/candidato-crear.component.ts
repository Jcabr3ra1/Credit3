import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Candidato } from 'src/app/candidato';
import { CandidatoService } from 'src/app/candidato.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-candidato-crear',
  templateUrl: './candidato-crear.component.html',
  styleUrls: ['./candidato-crear.component.css']
})
export class CandidatoCrearComponent implements OnInit {
  
  candidato : Candidato = new Candidato();

  constructor(private candidatoServicio: CandidatoService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarCandidato(){
    this.candidatoServicio.registrarCandidato(this.candidato).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeCandidato();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.candidato.nombreResolucion}`);
  }
  irALaListaDeCandidato(){
    this.router.navigate(['/candidato']);
  }
  onSubmit(){
    this.guardarCandidato()
  }
}
