const timeSeriesTest: number[] = [1, 4];
const durationTest = 2;
console.log(findPoisonedDuration(timeSeriesTest, durationTest));

export function findPoisonedDuration(
  timeSeries: number[],
  duration: number
): number {
  let durationCounter = 0;
  let i = 0;
  let maxTime = 0;
  while (i < timeSeries.length) {
    if (i == 0 || timeSeries[i] >= maxTime) {
      durationCounter += duration;
    } else {
      durationCounter += timeSeries[i] + duration - maxTime;
    }
    maxTime = timeSeries[i] + duration;
    i++;
  }
  return durationCounter;
}
