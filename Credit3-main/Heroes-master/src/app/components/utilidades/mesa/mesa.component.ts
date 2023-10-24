import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/mesa';
import { MesaService } from 'src/app/mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  mesa: Mesa[];

  constructor(private mesaService: MesaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerMesa();
  }

  actualizarMesa(id: string) { // Change the type to string
    this.router.navigate(['mesa-actu', id]);
  }
  irALaCrearDeMesa(){
    this.router.navigate(['/mesa-crear']);
  }

  private obtenerMesa() {
    this.mesaService.obtenerListaMesas().subscribe(data => {
      this.mesa = data;
    });
  }

  eliminarMesa(id: string) { // Change the type to string
    swal({
      title: '¿Estas seguro?',
      text: "Confirmar si desea eliminar al mesa",
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
        this.mesaService.eliminarMesa(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerMesa();
          swal(
            'Mesa eliminado',
            'El mesa ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}