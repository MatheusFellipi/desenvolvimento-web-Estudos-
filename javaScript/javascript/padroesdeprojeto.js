//#region  Fatory
function Pessoa () {
    return{
        name: 'matheus',
        lastName: 'fellipi'
    }
}

const p = Pessoa();
console.log(p)

function Pessoa (customProperties) {
    return{
        name: 'matheus',
        lastName: 'fellipi',
        ...customProperties
    }
}

const p = Pessoa({name: 'custom.Name', age: 27});
console.log(p)
//#endregion

//#region Singleton

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'matheus'})
const p2 = Pessoa.call({name: 'Custon.Name'});

console.log(p);

console.log(p2);


//#endregion

//#region Decorator
let loggedin = false;

function callIfAuthenticated(fn){
    return !!loggedin && fn();
}
function sum(a,b){
    return a + b;
}
console.log(callIfAuthenticated(()=> sum (2,3)));
loggedin = true;
console.log(callIfAuthenticated(()=> sum (2,3)));
loggedin = false;
console.log(callIfAuthenticated(()=> sum (2,3)));

//#endregion

//#region Observable
class Observable
{
    constructor(){
        this.observables=[];
    }
    subscrebe(fn){
        this.observables.push(fn);
    }
    notify(data) {
        this.observables.forEach(fn =>(data));
    }
    unsubscrebe(fn){
        this.observables = this.observables.filter(obs => obs !== fn)
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1 ${data}`);
const logData2 = data => console.log(`Subscribe 1 ${data}`);
const logData3 = data => console.log(`Subscribe 1 ${data}`);

o.subscrebe(logData1);
o.subscrebe(logData2);
o.subscrebe(logData3);

o.notify('notifiend 1' );

o.unsubscrebe(logData2);

o.notify('notified 2')

//#endregion

//#region mudule
function getName(){
    return name;
}

function setName(newName)
{
    name = newName;
}

module.exports = {
    getName,
    setName
}
//#endregion