// @ts-check
// import half from './src/half.js';
// export default half;

import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = +readlineSync.question('Введите значение для a: ');
    this.b = +readlineSync.question('Введите значение для b: ');
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(`Сумма: ${calculator.sum()}`);
console.log(`Произведение: ${calculator.mul()}`);
