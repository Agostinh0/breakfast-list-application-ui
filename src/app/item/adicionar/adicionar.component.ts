import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemServiceService } from 'src/app/Service/item-service.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(private router:Router, private service:ItemServiceService) { }

  item:Item;

  ngOnInit(): void {
  }

  mapParametersToItem(nome:String, cpfFuncionario:String){
    if(nome == "" || nome == null){
      alert("Por favor, preencha o campo nome.")
      return;

    }else if(cpfFuncionario == "" || cpfFuncionario == null){
      this.item = new Item(nome, "");
    }else{
      this.item = new Item(nome, cpfFuncionario);
    }
    this.adicionarItem(this.item);
  }

  adicionarItem(item:Item){
    this.service.addItem(item)
     .subscribe(data => {
       alert("Adicionado com sucesso!");
       this.router.navigate(['listar']);
     })
  }

}
