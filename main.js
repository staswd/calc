let calculator = {
  read(a, b) {
    return (this.a = a), (this.b = b);
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(5, 7);
console.log(calculator.sum());
console.log(calculator.mul());
