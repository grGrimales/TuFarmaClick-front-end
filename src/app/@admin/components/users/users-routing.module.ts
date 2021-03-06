import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
  },
  {
    path: 'agregar',
    component: AgregarUsuarioComponent,
  },
  {
    path: 'detalleuser/:uid',
    component: DetalleUsuarioComponent,
  }
     
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
