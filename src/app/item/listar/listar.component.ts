import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/Service/item-service.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  items:Item[];
  constructor(private service:ItemServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getItems()
     .subscribe(data =>{
       this.items = data;
     })
  }

  atualizarNome(item:Item):void{
    localStorage.setItem("id", item.id.toString());
    this.router.navigate(["editar"])
  }

  deletar(item: Item){
    this.service.deleteItem(item)
      .subscribe(data => {
        this.items = this.items.filter(i => i! == item);
        alert("Item removido com sucesso!");
      })
  }

}
