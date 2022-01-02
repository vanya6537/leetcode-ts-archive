// Todo: add explanation
function sequentialDigits(low: number, high: number): number[] {
  const allSequentialDigits = generateAllSequentialDigits();
  let leftIndex = 0;
  let rightIndex = allSequentialDigits.length;

  while (leftIndex < rightIndex && allSequentialDigits[leftIndex] < low)
    leftIndex++;

  while (leftIndex < rightIndex && allSequentialDigits[rightIndex - 1] > high)
    rightIndex--;

  return allSequentialDigits.slice(leftIndex, rightIndex);
}

function generateAllSequentialDigits(MIN_LENGTH = 1, MAX_LENGTH = 9) {
  const digits: number[] = [];
  MIN_LENGTH = Math.max(1, MIN_LENGTH);
  MAX_LENGTH = Math.min(9, MAX_LENGTH);

  for (let i = MAX_LENGTH; i >= MIN_LENGTH; i--) {
    let numString = "";
    const digitLength = 9 - i + 1;

    for (let digit = 1; digit <= digitLength; digit++) {
      numString += digit;
    }

    for (let newDigit = digitLength + 1; newDigit <= 10; newDigit++) {
      digits.push(Number(numString));
      numString = numString.slice(1) + newDigit;
    }
  }

  return digits;
}

console.log(sequentialDigits(10, 12).join(" "));
console.log(sequentialDigits(2, 20).join(" "));
