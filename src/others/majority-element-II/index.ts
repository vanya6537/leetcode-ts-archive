export function majorityElement(nums: number[]): number[] {
  const counter: { [key: string]: number } = {};
  const numsLenCut = Math.floor(nums.length / 3) + 1;
  const majorityElements: number[] = [];
  for (const num of nums) {
    if (num in counter) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }

    if (counter[num] === numsLenCut) {
      majorityElements.push(num);
    }
  }

  return majorityElements;
}
