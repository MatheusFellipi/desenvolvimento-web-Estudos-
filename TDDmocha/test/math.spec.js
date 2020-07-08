//#region sinon
const assert = require("assert");
const Math = require("../math.js");
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe("Math class", function () {
    beforeEach(function () { //hook Ensure that the value does not change,In this case 0
        value = 0;
    })

  it("sum two numbers", function (done) {
    const math = new Math();
    
    value=5;

    math.sum(value, 5, (value) => {
      expect(value).to.equal(10);
      done();
    });
  });
  it("multiply two numbers", function () {
    const math = new Math();
    const obj = {
        name: 'matheus',
    };

    
    //const obj2=obj

    const obj2={
            name: 'matheus'
    }
    expect(obj).to.deep.equal(obj2)
   // expect(obj).to.have.property('name').equal('matheus');
   // expect(math.multiply(value,5)).to.equal(10);
  });

  it.only('calls req with sum and index values',function () {
      const req={};
      const res ={
        load: function load() {
            console.log('called');
        }  
        //load: sinon.spy()
      }
      sinon.spy(res,'load').returns('xpto');
      const math = new Math();

      math.printSun(req,res,5,5);
      res.restore();
      //expect(res.load.calledOnce).to.be.true;
     //expect(res.load.args[0]).to.equal(10)
      expect(res.load.args[0][0]).to.equal('index')

  })
});
//#endregion

//#region chai
// const assert = require("assert");
// const Math = require("../math.js");
// const expect = require('chai').expect;

// let value = 0;

// describe("Math class", function () {
//     beforeEach(function () { //hook Ensure that the value does not change,In this case 0
//         value = 0;
//     })

//   it("sum two numbers", function (done) {
//     const math = new Math();
    
//     value=5;

//     math.sum(value, 5, (value) => {
//       expect(value).to.equal(10);
//       done();
//     });
//   });
//   it("multiply two numbers", function () {
//     const math = new Math();
//     const obj = {
//         name: 'matheus',
//     };

    
//     //const obj2=obj

//     const obj2={
//             name: 'matheus'
//     }
//     expect(obj).to.deep.equal(obj2)
//    // expect(obj).to.have.property('name').equal('matheus');
//    // expect(math.multiply(value,5)).to.equal(10);
//   });
// });
//#endregion



//#region mocha
// const assert = require("assert");
// const Math = require("../math.js");

// let value = 0;

// describe("Math class", function () {
//     beforeEach(function () { //hook Ensure that the value does not change,In this case 0
//         value = 0;
//     })

//   it("sum two numbers", function (done) {
//     const math = new Math();
//     value=5;

//     math.sum(value, 5, (value) => {
//       assert.equal(value, 10);
//       done();
//     });
//   });
//   it("multiply two numbers", function () {
//     const math = new Math();

//     assert.equal(math.multiply(value, 5), 0);
//   });
// });

// timeout of 2000ms exceeded,This is the maximum time
// it.only performs a test only
// it.skip 
//before 
//after
//afterEach
//#endregion