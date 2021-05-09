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

  baseUrl = 'https://breakfast-list-api.herokuapp.com/listaCafeDaManha/itens';

  getItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + '/listar');
  }

  addItem(item:Item){
    if(item.cpfFuncionario != ""){
      return this.http.post<Item>(
        this.baseUrl + '/salvar?nome=' + item.nome + '&cpfFuncionario='+ item.cpfFuncionario,
        item);
    }else{
      return this.http.post<Item>(
        this.baseUrl +'/salvar?nome=' + item.nome, item);
    }
  }

  getItemId(id:number){
    return this.http.get<Item>(this.baseUrl + '/buscar?id='+ id);
  }

  updateItemName(item:Item){
    return this.http.put<Item>(this.baseUrl + '/atualizar?id=' + item.id + '&nome=' 
    + item.nome, item);
  }

  updateItemEmployee(item:Item){
    return this.http.put<Item>(this.baseUrl + '/associarComFuncionario?id=' 
    + item.id + '&cpfFuncionario='+ item.cpfFuncionario, item);
  }

  deleteItem(item:Item){
    return this.http.delete<Item>(this.baseUrl + '/remover?id=' + item.id);
  }
}
