export class Funcionario{
    cpf : String;
    nome: String;
    itens: string[];

    constructor(cpf:String, nome:String, itens:string[]){
        this.nome = nome;
        this.cpf = cpf;
        this.itens = itens;
    }
}