import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './item/adicionar/adicionar.component';
import { AssociarComFuncionarioComponent } from './item/associar-com-funcionario/associar-com-funcionario.component';
import { EditarComponent } from './item/editar/editar.component';
import { ListarComponent } from './item/listar/listar.component';
import { ListarFuncionariosComponent } from './funcionario/listar/listar.component';
import { AdicionarFuncionarioComponent } from './funcionario/adicionar/adicionar.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'associar', component:AssociarComFuncionarioComponent},
  {path: 'listarFuncionarios', component:ListarFuncionariosComponent},
  {path: 'inserirFuncionario', component:AdicionarFuncionarioComponent},
  {path: 'editarFuncionario', component:EditarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
