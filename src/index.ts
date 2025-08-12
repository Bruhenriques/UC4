
// Para podermos criar um objeto de nossa classe 'Cachorro', primeiro criamos uma variável que deve ser do tipo Cachorro
// Depois, atribuimos valor a esta variável usando a palavra reservada 'new' seguida do nome da classe e dos valores esperados pelo construtor
// Quando criamos um objeto, chamamos isto de INSTANCIAR O OBJETO DA CLASSE

/*import { Cachorro } from "./Cachorro";



const meuCachorro: Cachorro = new Cachorro("Bob", "Vira-lata", 5);
const meuOutroCachorro: Cachorro = new Cachorro("Tobby", "Pincher", 2);

// Para chamarmos os métodos destes objetos, usamos: nomeDaVariavel.metodo()
meuCachorro.latir();
meuOutroCachorro.latir();


//Para acessarmos o valor do atributo de um objeto, chamamos o nome da variavel + . + o nome do atributo
console.log(meuOutroCachorro.idade)

// Para trocarmos o valor de um atributo de um objeto o nome da variável + . + o nome do atributo, depois '=' e passamos o novo valor
meuCachorro.nome = "Bobbyson"
console.log(meuCachorro.nome)*/

import { Calculadora } from "./Calculadora";

const minhaCalculadora = new Calculadora(42, 32);

console.log("Soma:", minhaCalculadora.somar());
console.log("Subtração:", minhaCalculadora.subtrair());
console.log("Multiplicação:", minhaCalculadora.multiplicar());
console.log("Divisão:", minhaCalculadora.dividir());
