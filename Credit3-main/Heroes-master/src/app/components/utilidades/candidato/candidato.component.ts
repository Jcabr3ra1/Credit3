import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/candidato';
import { CandidatoService } from 'src/app/candidato.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  candidato: Candidato[];

  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCandidato();
  }

  actualizarCandidato(id: string) { // Change the type to string
    this.router.navigate(['candidato-actu', id]);
  }
  irALaCrearDeCandidato(){
    console.log("soy patricio guaaaaaaaaaaaaa")
    this.router.navigate(['/candidato-crear']);
  }

  private obtenerCandidato() {
    this.candidatoService.obtenerListaCandidato().subscribe(data => {
      this.candidato = data;
    });
  }

  eliminarCandidato(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al candidato",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.candidatoService.eliminarCandidato(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerCandidato();
          swal(
            'Candidato eliminado',
            'El candidato ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
