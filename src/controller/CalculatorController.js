import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Calculator from '../model/Calculator.js';

class CalculatorController {
  #inputView;
  #outputView;
  #calculator;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#calculator = new Calculator();
  }

  async start() {
    const inputString = await this.#inputView.input();
    const result = this.#calculator.add(inputString);
    this.#outputView.print(result);
  }
}

export default CalculatorController;