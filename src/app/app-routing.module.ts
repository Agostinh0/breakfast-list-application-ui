import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './item/adicionar/adicionar.component';
import { EditarComponent } from './item/editar/editar.component';
import { ListarComponent } from './item/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
