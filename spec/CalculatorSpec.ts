/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/modules/chai/index.d.ts" />
import Calculator from '../lib/Calculator';
import chai = require('chai');
const expect = chai.expect;

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(function () {
    calc = new Calculator();
  });

  describe('#add', () => {
    it('should add two numbers together', () => {
      expect(calc.add(2, 2)).to.equals(4);
    });
  });
  describe('#inc', () => {
    it('should increment number', () => {
      expect(calc.inc(2)).to.equals(3);
    });
  });
});
