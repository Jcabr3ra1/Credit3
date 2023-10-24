import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/mesa';
import { MesaService } from 'src/app/mesa.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa-crear',
  templateUrl: './mesa-crear.component.html',
  styleUrls: ['./mesa-crear.component.css']
})
export class MesaCrearComponent implements OnInit {

  mesa : Mesa = new Mesa();
  constructor(private mesaService: MesaService, private Router:Router) { }

  ngOnInit(): void {
  }
  guardarMesa(){
    this.mesaService.registrarMesa(this.mesa).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeMesa();
    }, error => console.log(error));
    swal(`Se guardo con exito ${this.mesa.numMesas}`);
  }
  irALaListaDeMesa(){
    this.Router.navigate(['/mesa']);
  }
  onSubmit(){
    this.guardarMesa()
  }
}
