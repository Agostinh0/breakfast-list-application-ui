import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/Funcionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionario: Funcionario;
  constructor(private http:HttpClient) { }

  baseUrl = 'https://breakfast-list-api.herokuapp.com/listaCafeDaManha/funcionarios';

  addEmployee(funcionario:Funcionario){
      return this.http.post<Funcionario>(
        this.baseUrl + '/salvar?nome=' + funcionario.nome + 
        '&cpf='+ funcionario.cpf,
        funcionario);
  }

  getEmployees() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.baseUrl + '/listar');
  }

  deleteEmployee(funcionario:Funcionario){
    return this.http.delete<Funcionario>(this.baseUrl + '/remover?cpf=' + funcionario.cpf);
  }

  getEmployeeByCpf(cpf:string){
    return this.http.get<Funcionario>(this.baseUrl + '/buscar?cpf='+ cpf);
  }

  updateEmployeeName(funcionario:Funcionario){
    return this.http.put<Funcionario>(this.baseUrl + '/atualizar?cpf=' + funcionario.cpf 
    + '&nome=' + funcionario.nome, funcionario);
  }
}
