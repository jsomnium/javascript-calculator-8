import CalculatorController from './Controller/CalculatorController.js';

class App {
  async run() {
    const controller = new CalculatorController();
    await controller.start();
  }
}

export default App;
