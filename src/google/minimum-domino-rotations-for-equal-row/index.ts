/*
    2 <= tops.length <= 2 * 104
    bottoms.length == tops.length
    1 <= tops[i], bottoms[i] <= 6
 */
function minDominoRotations(tops: number[], bottoms: number[]): number {
  const countMap: Record<number, number> = {};
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] === bottoms[i]) {
      countMap[tops[i]] = countMap[tops[i]]
        ? countMap[tops[i]] - 1
        : tops.length - 1;
    } else {
      countMap[tops[i]] = countMap[tops[i]]
        ? countMap[tops[i]] - 1
        : tops.length - 1;
      countMap[bottoms[i]] = countMap[bottoms[i]]
        ? countMap[bottoms[i]] - 1
        : bottoms.length - 1;
    }
  }
  const possibleFlipTargets: number[] = Object.entries(countMap)
    .filter(([_, count]) => count === 0)
    .map(([points]) => +points);

  // Let's count how much steps needed to replace all tops to be equal to each of possible replacement targets
  const getNeededFlips = (flipTarget: number) =>
    Math.min(
      tops.filter((val) => val !== flipTarget).length,
      bottoms.filter((val) => val !== flipTarget).length
    );

  switch (possibleFlipTargets.length) {
    case 0:
      return -1;
    case 1:
      return getNeededFlips(possibleFlipTargets[0]);
    default:
      return Math.min(
        ...possibleFlipTargets.map((flipTarget) => getNeededFlips(flipTarget))
      );
  }
}
