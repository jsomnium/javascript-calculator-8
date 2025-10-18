import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant';

class OutputView {
  print(result) {
    Console.print(Message.OUTPUT_RESULT + result);
  }
}

export default OutputView;