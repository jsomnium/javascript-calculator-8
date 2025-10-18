import { NEGATIVE_NUMBER_ERROR } from '../constant';

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
          const delimiterEndIndex = inputString.indexOf('\n');
          const customDelimiter = inputString.substring(2, delimiterEndIndex);
          delimiters.push(customDelimiter);
          numbersString = inputString.substring(delimiterEndIndex + 1);
      }
      
      // 숫자 추출
      const delimiterRegex = new RegExp(delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));
      const numberStrings = numbersString.split(delimiterRegex);
      
      // 숫자가 아닌 값이 들어있을 시, 예외 발생하는 부분 추가하기
      return numberStrings.map(numStr => parseInt(numStr, 10));
  }

  #calculateSum(numbers) {
    // 음수가 있다면 예외 발생
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(NEGATIVE_NUMBER_ERROR, negativeNumbers.join(', '));
    }

    // 합 계산
    return numbers.reduce((total, currentNum) => total + currentNum, 0);
  }
}

export default Calculator;