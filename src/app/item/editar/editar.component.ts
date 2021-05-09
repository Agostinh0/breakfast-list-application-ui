import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemServiceService } from 'src/app/Service/item-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  item :Item;
  constructor(private router:Router, private service:ItemServiceService) { }

  ngOnInit(): void {
  }

  atualizarNome(){
    let id = localStorage.getItem("id");
    this.service.getItemId(+id!)
      .subscribe(data => {
        this.item = data;
      })

  }

}
