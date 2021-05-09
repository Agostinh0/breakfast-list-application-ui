import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/Service/item-service.service';

@Component({
  selector: 'app-associar-com-funcionario',
  templateUrl: './associar-com-funcionario.component.html',
  styleUrls: ['./associar-com-funcionario.component.css']
})
export class AssociarComFuncionarioComponent implements OnInit {

  item :Item;
  constructor(private router:Router, private service:ItemServiceService) { }

  ngOnInit(): void {
    this.associarComFuncionario();
  }

  associarComFuncionario(){
    let id = localStorage.getItem("id");
    this.service.getItemId(+id)
      .subscribe(data => {
        this.item = data;
      })
  }

  confirmarAssociacao(item:Item){
    this.service.updateItemEmployee(item)
      .subscribe(data=>{
        this.item = data;
        alert("CPF do responsável alterado com sucesso!");
        this.router.navigate(["listar"]);
      })
  }

}
