import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant';

class NumberInputter {
  async input() {
    const inputString = await Console.readLineAsync(Message.INPUT_PROMPT);
    return inputString;
  }
}

export default NumberInputter;