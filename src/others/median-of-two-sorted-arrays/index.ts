export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const mergedArray = merge(nums1, nums2);
  const medianIndex = Math.floor((mergedArray.length - 1) / 2);

  if (mergedArray.length % 2 !== 0) return mergedArray[medianIndex];

  return (mergedArray[medianIndex] + mergedArray[medianIndex + 1]) / 2;
}

function merge(arr1: number[], arr2: number[]): number[] {
  const mergedArr: number[] = [];
  for (let i = 0, j = 0; i + j != arr1.length + arr2.length; ) {
    if (j === arr2.length || arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  return mergedArr;
}
