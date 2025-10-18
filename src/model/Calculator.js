    // 1. 사용자 정의 구분자가 있는 지 확인한다
    // 즉, "//[구분자]\n" 형식으로 입력 문자열이 시작되는지 확인한다.
    // 1-1. 있다면 구분자를 추출하고, 입력 문자열에서 제거한다. 또, 구분자 목록에 추가한다.
    // 1-2. 없다면 입력 문자열에서 제거하고 기본 구분자(쉼표, 콜론)를 사용한다.

    // 2. 숫자 부분을 처리한다.
    // 이후 문자열 끝까지 숫자들을 추출한다.
    // 숫자가 아닌 구분자 리스트 중 하나라도 나오면 그 부분을 기준으로 문자열을 나눈다.
  
    // 3. 추출된 숫자들을 순회하며 합을 계산한다.
    // 음수인 숫자가 있으면 예외를 발생시킨다.
    // 만약 입력 문자열이 빈 문자열이라면 0을 반환한다.

    // 4. 종료 후 최종 합 숫자를 반환한다.

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