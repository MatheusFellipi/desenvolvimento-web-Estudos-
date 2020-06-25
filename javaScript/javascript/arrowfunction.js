function log(valve) {
  console.log(valve);
}
log("teste");

var sum = function (a, b) {
  return a + b;
};
console.log(sum(9, 1));

var sum1 = (a, b) => a + b;
console.log(sum1(9, 2));

var sum2 = (a) => a + 5;
console.log(sum2(9));

function car() {
  this.foo = "bar";
}
console.log(new car());

/*var car = () => {
    this.foo = 'bar'
} nao e uma construtor */
/* objetos */
var objFunction = {
  showContext: function showContext() {
      //this = objFunction
    setTimeout(() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  },
};

objFunction.showContext();

var createOBJ = () => ({ test: 123 });
console.log(createOBJS());

/* de fault Function Arquments */
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5,5));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5)); //retorna um not a number

function multiply(a, b) {
    b = b || 1; 
    return a * b;
}
console.log(multiply(5,0));//retorna 5 

function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(5));//esse modo funciona mas e uma modo verboso

function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(5));//funciona corretamente mesmo passado uma undefined ou  0

//lazy evaluation
function randomNunber(){
    return Math.random() * 10;
}
function multiply(a, b = randomNunber()) {
    return a * b;
}
console.log(multiply(5));
//Enhanced obejct literals
// var prop1 = "DIO"
// var objEnhanced = {
//     prop1: prop1
// };

function method1() {
    console.log('called method');
}

var prop1 = "DIO"
var objEnhanced = {
    prop1,
    method1
};
console.log(objEnhanced);
objEnhanced.method1;

var objEnhanced2 = {
    sum(a,b){
        return a + b;
    }
};

var propname=' test';

var ob={};
ob[propname + "concat"]='prop value';
console.log(ob);


