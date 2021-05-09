import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './item/listar/listar.component';
import { AdicionarComponent } from './item/adicionar/adicionar.component';
import { EditarComponent } from './item/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ItemServiceService } from '../app/Service/item-service.service';
import { Item } from './models/Item';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
