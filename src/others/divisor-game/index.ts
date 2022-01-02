export function divisorGame(N: number): boolean {
  const dp: Array<boolean | null> = new Array(1001).fill(null);
  return checkAllSteps(N, dp);
}

function checkAllSteps(N: number, cachedSteps: Array<boolean | null>): boolean {
  // If N===1 player can't choose any x, player will lose
  if (N === 1) return false;
  // If step is cached - use previous calculations
  if (cachedSteps[N] !== null) return <boolean>cachedSteps[N];

  for (let x = 1; x <= Math.ceil(N / 2); x++) {
    if (N % x === 0) {
      // If this player knows that next player loses after this step
      // Means that this player wins, so this is optimal solution
      if (!checkAllSteps(N - x, cachedSteps)) {
        // Cache this step
        return (cachedSteps[N] = true);
      }
    }
  }

  // Otherwise this player will lose
  return (cachedSteps[N] = false);
}
