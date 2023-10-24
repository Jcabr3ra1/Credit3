import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Partido } from 'src/app/partido';
import { PartidoService } from 'src/app/partido.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-partido-crear',
  templateUrl: './partido-crear.component.html',
  styleUrls: ['./partido-crear.component.css']
})
export class PartidoCrearComponent implements OnInit {
  partido : Partido = new Partido();
  constructor(private partidoService: PartidoService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarPartido(){
    this.partidoService.registrarPartido(this.partido).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePartido();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.partido.nombrePatido}`);
  }
  irALaListaDePartido(){
    this.router.navigate(['/partido']);
  }
  onSubmit(){
    this.guardarPartido()
  }
}
