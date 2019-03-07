function Calc(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;

  this.add = function() {
      return this.firstNumber + this.secondNumber;
  }

  this.substract = () => this.firstNumber - this.secondNumber;
}

const numberToAdd = new Calc(5, 10);
const numberToAddReversed = new Calc(10, 5);

const numberToSubstract = new Calc(5, 10);
const numberToSubstractReversed = new Calc(10, 5);

describe('Check if the add method works as intended', () => {
  test('Check is 5 + 10 is falsey', () => {
    expect(numberToAdd.add() === 50).toBeFalsy();
  });
  test('Check is 5 + 10 is truthy', () => {
    expect(numberToAdd.add() === 15).toBeTruthy();
  });
  test('Check is numbers switched around is truthy', () => {
    expect(numberToAddReversed.add()).toEqual(15);
  });
});

describe('Check if the substract method works as intended', () => {
  test('Check if 5 - 10 is not negative -5', () => {
    expect(numberToSubstract.substract() === 5).toBeFalsy();
  })
});
