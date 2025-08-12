// A classe funciona como um molde para um tipo de dado

// Definição da classe
// Export permite que importemos depois esta classe em qualquer lugar do projeto
// A palavra 'class' indica que isto é uma classe
// Depois de class, colocamos o nome da classe que deve ser EXATAMENTE igual ao nome do arquivo

export class Cachorro {
    // Atributos (coisas que o objeto desta classe tem)
    nome: string;
    raca: string;
    idade: number;

    // Construtor da classe
    // É chamado automaticamente quando criamos um objeto a partir desta classe
    constructor(nomeCachorro: string, racaCachorro: string, idade: number) {
        this.nome = nomeCachorro;
        this.raca = racaCachorro;
        this.idade = idade;
    }

    // Métodos (coisas que o objeto desta classe pode fazer)
    // Não usamos a palavra "function" dentro de classes
    latir(): void {
        console.log(`O cachorro de nome ${this.nome} está latindo`);
    }
    correr(): void {
    console.log(`O cachorro ${this.nome} está correndo`);
}

}

//Crie um novo arquivo chamado calculadora
//Dentro deste arquivo crie a classe calculadora
//crie os atributos numeroUm e numeroDois
//Faça o construtor
//Depois faça os metodos somar, subtrair, multiplicar e dividir
//Apos isso, NO ARQUIVO index.ts, instancie a calculadora e chame seus metodos