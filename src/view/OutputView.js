import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class OutputView {
  print(result) {
    Console.print(Message.OUTPUT_PROMPT + result);
  }
}

export default OutputView;