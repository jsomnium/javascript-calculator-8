import { Message } from '../constant/index.js';

class Calculator {
  add(inputString) {
    if (inputString === "") {
      return 0;
      }

    const numbers = this.#extractNumbers(inputString);
      return this.#calculateSum(numbers);
    }

  #extractNumbers(inputString) {
    const delimiters = [',', ':'];
    let numbersString = inputString;

    // 숫자 추출을 위한 사용자 정의 구분자 처리
    if (inputString.startsWith('//')) {
      const delimiterEndIndex = inputString.indexOf('\\n');
      const customDelimiter = inputString.substring(2, delimiterEndIndex);
        delimiters.push(customDelimiter);
        numbersString = inputString.substring(delimiterEndIndex + 2);
    }
      
    // 숫자 추출
    const delimiterRegex = new RegExp(delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));
    const numberStrings = numbersString.split(delimiterRegex);
      
    // 예외 발생 조건 검사
    if (numberStrings.length === 0 ||
      numberStrings.some(numStr => numStr.trim() === '') ||
      numberStrings.some(numStr => isNaN(numStr))
    ) {
      throw new Error('[ERROR] 유효하지 않은 숫자가 입력되었습니다.');
    }

    // 공백 문자가 포함된 경우 예외 발생
    if (numberStrings.some(numStr => numStr.includes(' ')) && !delimiters.includes(' ')) {
      throw new Error('[ERROR] 유효하지 않은 문자가 입력되었습니다.');
    }

    return numberStrings.map(numStr => parseInt(numStr, 10));
  }

  #calculateSum(numbers) {
    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 유효하지 않은 숫자가 입력되었습니다.');
    }

    // 음수가 있다면 예외 발생
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(Message.NEGATIVE_NUMBER_ERROR);
    }

    return numbers.reduce((acc, current) => acc + current, 0);
  }
}

export default Calculator;