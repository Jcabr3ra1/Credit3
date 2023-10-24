import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Inicia servicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin servicios

//RUTAS
//import{APP_ROUTING} from './app.routes';

// aqui importacion de servicios
import { HeroesService } from './services/heroes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { HomeComponent } from './components/utilidades/home/home.component';

//RUTAS
//import{APP_ROUTING} from './app.routes';

import { APP_ROUTING } from './app.routes';
import { from } from 'rxjs';
import { CandidatoComponent } from './components/utilidades/candidato/candidato.component';
import { PartidoComponent } from './components/utilidades/partido/partido.component';
import { MesaComponent } from './components/utilidades/mesa/mesa.component';
import { LoginComponent } from './components/utilidades/login/login.component';
import { ResultadoComponent } from './components/utilidades/resultado/resultado.component';
import { PermisosComponent } from './components/utilidades/permisos/permisos.component';
import { RolesComponent } from './components/utilidades/roles/roles.component';
import { UsuariosComponent } from './components/utilidades/usuarios/usuarios.component';
import { CardComponent } from './components/utilidades/card/card.component';
import { AyudasComponent } from './components/utilidades/ayudas/ayudas.component';
import { UsuarioCrearComponent } from './components/utilidades/usuario-crear/usuario-crear.component';
import { UsuarioActuComponent } from './components/utilidades/usuario-actu/usuario-actu.component';
import { RolesCrearComponent } from './components/utilidades/roles-crear/roles-crear.component';
import { RolesActuComponent } from './components/utilidades/roles-actu/roles-actu.component';
import { PermisosCrearComponent } from './components/utilidades/permisos-crear/permisos-crear.component';
import { PermisosActuComponent } from './components/utilidades/permisos-actu/permisos-actu.component';
import { PartidoCrearComponent } from './components/utilidades/partido-crear/partido-crear.component';
import { MesaCrearComponent } from './components/utilidades/mesa-crear/mesa-crear.component';
import { MesaActuComponent } from './components/utilidades/mesa-actu/mesa-actu.component';
import { CandidatoCrearComponent } from './components/utilidades/candidato-crear/candidato-crear.component';
import { CandidatoActuComponent } from './components/utilidades/candidato-actu/candidato-actu.component';
import { HttpClientModule } from '@angular/common/http';
import { PermisosRolesComponent } from './components/utilidades/permisos-roles/permisos-roles.component';
import { PartidoActuComponent } from './components/utilidades/partido-actu/partido-actu.component';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,   
    CandidatoComponent,   
    PartidoComponent,
    MesaComponent,
    LoginComponent,
    ResultadoComponent,
    PermisosComponent,
    RolesComponent,
    UsuariosComponent,    
    CardComponent,
    AyudasComponent,
    UsuarioCrearComponent,
    UsuarioActuComponent,
    RolesCrearComponent,
    RolesActuComponent,
    PermisosCrearComponent,
    PermisosActuComponent,
    PartidoCrearComponent,    
    MesaCrearComponent,
    MesaActuComponent,
    CandidatoCrearComponent,
    CandidatoActuComponent,
    PermisosRolesComponent,
    PartidoActuComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING //rutas
  ],
  //aqui llamo servicios
  providers: [
    CargarScriptsService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
