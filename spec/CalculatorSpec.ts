/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
import Calculator from '../lib/Calculator';
import chai = require('chai');
var expect = chai.expect;

describe('Calculator', () => {
  var calc:Calculator;

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
