import NumberInputter from '../view/NumberInputter.js';
import NumberOutputter from '../view/NumberOutputter.js';
import Calculator from '../model/Calculator.js';

class CalculatorController {
  #numberInputter;
  #numberOutputter;
  #calculator;

  constructor() {
    this.#numberInputter = new NumberInputter();
    this.#numberOutputter = new NumberOutputter();
    this.#calculator = new Calculator();
  }

  async start() {
    const inputString = await this.#numberInputter.input();
  }
}

export default CalculatorController;