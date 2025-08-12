"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(numeroUm, numeroDois) {
        this.numeroUm = numeroUm;
        this.numeroDois = numeroDois;
    }
    somar() {
        return this.numeroUm + this.numeroDois;
    }
    subtrair() {
        return this.numeroUm - this.numeroDois;
    }
    multiplicar() {
        return this.numeroUm * this.numeroDois;
    }
    dividir() {
        if (this.numeroDois === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return this.numeroUm / this.numeroDois;
    }
}
exports.Calculadora = Calculadora;
