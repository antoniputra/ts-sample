import Calculator from '../../Calculator';
import { expect } from 'chai';

describe('Calculator class', () => {

  let calc: Calculator;

  beforeEach(() => {
    const elem = document.createElement("div");
    elem.id = 'video1';
    calc = new Calculator(elem);
  })

  it('sum should works well', () => {
    const result = calc.sum(1, 1);
    expect(result).to.equal(2);
  });

  it('dom should works', () => {
    calc.fillElem('Hi');
    expect(calc.elem.innerHTML).to.equal('Hi');
  });
});