import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  item:Item
  constructor(private http:HttpClient) { }

  listUrl = 'http://localhost:8080/listaCafeDaManha/itens/listar';

  getItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.listUrl);
  }

  addItem(item:Item){
    if(item.cpfFuncionario != ""){
      return this.http.post<Item>(
        'http://localhost:8080/listaCafeDaManha/itens/salvar?nome=' + item.nome + 
        '&cpfFuncionario='+ item.cpfFuncionario,
        item);
    }else{
      return this.http.post<Item>(
        'http://localhost:8080/listaCafeDaManha/itens/salvar?nome=' + item.nome, item);
    }
  }

  getItemId(id:number){
    return this.http.get<Item>('http://localhost:8080/listaCafeDaManha/itens/buscar?id='+ id);
  }

  updateItemName(item:Item){
    return this.http.put<Item>('http://localhost:8080/listaCafeDaManha/itens/atualizar?id=' + item.id + '&nome=' 
    + item.nome, item);
  }

  deleteItem(item:Item){
    return this.http.delete<Item>('http://localhost:8080/listaCafeDaManha/itens/remover?id=' + item.id);
  }
}
