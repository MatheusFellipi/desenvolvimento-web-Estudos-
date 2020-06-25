
function Pessoa(name) {
    this.name = name;
}
const p = new Pessoa('guilherme')

console.log(p)//vai imprimir o nome
 

function Pessoa(name) {
    this.name = name;
    return {
        name:'teste'
    };
}
const p2 = new Pessoa('guilherme')

console.log(p2)//imprimi o teste
 

function Cachorro() {}
Cachorro.prototype.latir = function() {}

const c = new Cachorro()


class Animal{
    constructor(){
        this.qtdePatas = 0;
    }
    movimenter ( ) {}
}

class Cachorro extends Animal {
    constructor(moder){
        super();
        this.qtdePatas = 4;
        this.moder = moder;
    }
}

const pug=new Cachorro(false)
const pitbull = new Cachorro(true)

//classes 
class Person {
    constructor(name){
        this.name = name;
    }
    latir(){
        console.log('Au! Au!')
    }
}



class PessoaF extends Person {
    constructor(name,cpf)
    {
        super(name)
        this.cpf = cpf
    }
}
