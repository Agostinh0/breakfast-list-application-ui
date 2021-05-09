import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/Service/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  funcionario:Funcionario;
  constructor(private router:Router, private service:FuncionarioService) { }

  ngOnInit(): void {
    this.atualizarNome();
  }

  atualizarNome(){
    let cpf = localStorage.getItem("cpf");
    this.service.getEmployeeByCpf(cpf)
      .subscribe(data => {
        this.funcionario = data;
      })
  }

  confirmarAtualizacaoNome(funcionario:Funcionario){
    this.service.updateEmployeeName(funcionario)
      .subscribe(data=>{
        this.funcionario = data;
        alert("Nome do funcionário alterado com sucesso!");
        this.router.navigate(["listarFuncionarios"]);
      })
  }

}
