console.log(divisorGame(1000));
export function divisorGame(N: number): boolean {
  return checkAllSteps(N);
}

function checkAllSteps(N: number): boolean {
  // If N===1 we can't choose any x, we will lose
  if (N === 1) return false;

  for (let x = 1; x < Math.ceil(N / 2); x++) {
    if (N % x === 0) {
      // If this player knows that next player loses after this step
      const nextPlayerFails = !checkAllSteps(N - x);
      // Means that this player wins, so this is optimal solution
      if (nextPlayerFails) {
        return true;
      }
    }
  }

  // Otherwise this player will lose
  return false;
}
