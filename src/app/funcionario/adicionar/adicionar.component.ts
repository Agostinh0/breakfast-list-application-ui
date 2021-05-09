import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/Service/funcionario.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {

  constructor(private router:Router,private service:FuncionarioService) { }

  funcionario:Funcionario

  ngOnInit(): void {
  }

  mapParametersToEmployee(nome:String, cpf:String){
    if((nome == "" || nome == null) || (cpf == "" || cpf == null)){
      alert("Por favor, preencha todos os campos.")
      return;
    }
    
    let itens: string[] = [];

    this.funcionario = new Funcionario(nome, cpf, itens);
    
    this.adicionarFuncionario(this.funcionario);
  }

  adicionarFuncionario(funcionario:Funcionario){
    this.service.addEmployee(funcionario)
     .subscribe(data => {
       alert("Adicionado com sucesso!");
       this.router.navigate(['listarFuncionarios']);
     })
  }
}
