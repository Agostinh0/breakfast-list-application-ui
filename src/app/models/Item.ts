export class Item{
    id : number;
    nome: String;
    cpfFuncionario : String;

    constructor(nome:String, cpfFuncionario:String){
        this.nome = nome;
        this.cpfFuncionario = cpfFuncionario;
    }
}