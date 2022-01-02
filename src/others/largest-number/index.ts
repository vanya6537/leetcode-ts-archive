export function largestNumber(nums: number[]): string {
  const numStrings: string[] = nums
    .map((num) => num.toString())
    .sort((l, r) => {
      if (l === r) return 0;
      if (l + r < r + l) {
        return 1;
      } else return -1;
    });
  if (numStrings[0] === "0") return "0";

  return numStrings.join("");
}
