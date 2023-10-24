import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/partido';
import { PartidoService } from 'src/app/partido.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  partido: Partido[];

  constructor(private partidoService: PartidoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPartido();
  }

  actualizarPartido(id: string) { // Change the type to string
    this.router.navigate(['partido-actu', id]);
  }
  irALaCrearDePartido(){
    this.router.navigate(['/partido-crear']);
  }

  private obtenerPartido() {
    this.partidoService.obtenerListaPartidos().subscribe(data => {
      this.partido = data;
    });
  }

  eliminarPartido(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al partido",
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
        this.partidoService.eliminarPartido(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerPartido();
          swal(
            'Partido eliminado',
            'El partido ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
