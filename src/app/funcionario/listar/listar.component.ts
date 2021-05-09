import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/Service/funcionario.service';
import { Funcionario } from '../../models/Funcionario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios:Funcionario[];
  constructor(private router:Router, private service:FuncionarioService) { }

  ngOnInit(): void {
    this.service.getEmployees()
     .subscribe(data =>{
       this.funcionarios = data;
     })
  }

  inserirFuncionario(){
    this.router.navigate(['inserirFuncionario']);
  }

  editarFuncionario(funcionario: Funcionario){
    localStorage.setItem("cpf", funcionario.cpf.toString())
    this.router.navigate(['editarFuncionario']);
  }

  removerFuncionario(funcionario: Funcionario){
    this.service.deleteEmployee(funcionario)
      .subscribe(data => {
        this.funcionarios = this.funcionarios.filter(function(funcionarios){
          return funcionarios !== funcionario;
        });
        alert("Funcionário removido com sucesso!");
      })
  }
}
