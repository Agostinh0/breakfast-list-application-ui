import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './item/listar/listar.component';
import { AdicionarComponent } from './item/adicionar/adicionar.component';
import { EditarComponent } from './item/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ItemServiceService } from '../app/Service/item-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AssociarComFuncionarioComponent} from './item/associar-com-funcionario/associar-com-funcionario.component'
import { ListarFuncionariosComponent } from './funcionario/listar/listar.component';
import { AdicionarFuncionarioComponent } from './funcionario/adicionar/adicionar.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.component';
import { FuncionarioService } from './Service/funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    EditarComponent,
    AssociarComFuncionarioComponent,
    ListarFuncionariosComponent,
    AdicionarFuncionarioComponent,
    EditarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemServiceService, FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
