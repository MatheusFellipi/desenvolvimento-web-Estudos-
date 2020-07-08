class Math {
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 5);
  }
  multiply(a, b) {
    return a * b;
  }

  printSun(req, res, a, b){
    console.log(res.load('index', a + b));
  }
}

module.exports = Math;
