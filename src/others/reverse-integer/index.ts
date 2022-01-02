export function reverse(x: number): number {
  const MIN_NUM = -(2 ** 31);
  const MAX_NUM = 2 ** 31 - 1;
  const stringRepresentation = x.toString().split("").reverse().join("");
  if (x < 0) {
    x = -+stringRepresentation.slice(0, stringRepresentation.length - 1);
  } else {
    x = +stringRepresentation;
  }

  if (x < MIN_NUM || x > MAX_NUM) {
    return 0;
  } else {
    return x;
  }
}
