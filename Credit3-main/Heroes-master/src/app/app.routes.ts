import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/utilidades/home/home.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { CandidatoComponent } from './components/utilidades/candidato/candidato.component';
import { CandidatoCrearComponent } from './components/utilidades/candidato-crear/candidato-crear.component';
import { CandidatoActuComponent } from './components/utilidades/candidato-actu/candidato-actu.component';
import { PartidoComponent } from './components/utilidades/partido/partido.component';
import { MesaComponent } from './components/utilidades/mesa/mesa.component';
import { ResultadoComponent } from './components/utilidades/resultado/resultado.component';
import { LoginComponent } from './components/utilidades/login/login.component';
import { UsuariosComponent } from './components/utilidades/usuarios/usuarios.component';
import { AyudasComponent } from './components/utilidades/ayudas/ayudas.component';
import { UsuarioCrearComponent } from './components/utilidades/usuario-crear/usuario-crear.component';
import { UsuarioActuComponent } from './components/utilidades/usuario-actu/usuario-actu.component';
import { RolesComponent } from './components/utilidades/roles/roles.component';
import { RolesCrearComponent } from './components/utilidades/roles-crear/roles-crear.component';
import { RolesActuComponent } from './components/utilidades/roles-actu/roles-actu.component';
import { PermisosComponent } from './components/utilidades/permisos/permisos.component';
import { PermisosCrearComponent } from './components/utilidades/permisos-crear/permisos-crear.component';
import { PermisosActuComponent } from './components/utilidades/permisos-actu/permisos-actu.component';
import { PermisosRolesComponent } from './components/utilidades/permisos-roles/permisos-roles.component';
import { PartidoCrearComponent } from './components/utilidades/partido-crear/partido-crear.component';
import { PartidoActuComponent } from './components/utilidades/partido-actu/partido-actu.component';
import { MesaCrearComponent } from './components/utilidades/mesa-crear/mesa-crear.component';
import { MesaActuComponent } from './components/utilidades/mesa-actu/mesa-actu.component';


const APP_ROUTES:Routes=[
    
    {path:'home',component:HomeComponent},
    {path:'candidato',component:CandidatoComponent},
    {path:'candidato-crear',component:CandidatoCrearComponent},
    {path:'candidato-actu/:id',component:CandidatoActuComponent},
    {path:'partido',component:PartidoComponent},
    {path:'partido-crear',component:PartidoCrearComponent},
    {path:'partido-actu/:id',component:PartidoActuComponent},
    {path:'mesa',component:MesaComponent},
    {path:'mesa-crear',component:MesaCrearComponent},
    {path:'mesa-actu/:id',component:MesaActuComponent },
    {path:'resultado',component:ResultadoComponent},    
    {path:'usuarios',component:UsuariosComponent},
    {path:'login',component:LoginComponent},
    {path:'ayudas', component:AyudasComponent},
    {path:'usuario-crear', component: UsuarioCrearComponent},
    {path:'usuario-actu/:id', component: UsuarioActuComponent},
    {path:'roles',component:RolesComponent},
    {path:'roles-crear',component:RolesCrearComponent},
    {path:'roles-actu/:id',component:RolesActuComponent},
    {path:'permisos',component:PermisosComponent},
    {path:'permisos-crear',component:PermisosCrearComponent},
    {path:'permisos-actu/:id',component:PermisosActuComponent},
    {path:'permisos-roles',component:PermisosRolesComponent},    
    {path:'**',pathMatch:'full', redirectTo: 'login'}
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
