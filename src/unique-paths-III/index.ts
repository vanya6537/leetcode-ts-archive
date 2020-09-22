// Todo: add explanation
type Point = { x: number; y: number };

const testGrid: number[][] = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
];

const MOVES: { [key: string]: Point } = {
  RIGHT: { x: 1, y: 0 },
  LEFT: { x: -1, y: 0 },
  TOP: { x: 0, y: 1 },
  BOTTOM: { x: 0, y: -1 },
};

for (const row of testGrid) console.log(row);
console.log();

export function uniquePathsIII(grid: number[][]): number {
  const start = findStart(grid);
  const finish = findFinish(grid);
  const counter = { val: 0 };
  console.log("start: ", start);
  console.log("finish: ", finish);
  const used: boolean[][] = new Array(grid.length);
  for (let i = 0; i < used.length; i++) {
    used[i] = new Array(grid[0].length).fill(false);
    for (let j = 0; j < used[i].length; j++) {
      if (grid[i][j] == -1) used[i][j] = true;
    }
  }

  dfs(grid, used, start[0], start[1], finish, counter);

  return counter.val;
}

function dfs(
  grid: number[][],
  used: boolean[][],
  y: number,
  x: number,
  finish: number[],
  counter: { val: number }
) {
  used[y][x] = true;

  if (y === finish[0] && x === finish[1] && allUsed(used)) {
    counter.val += 1;
    used[y][x] = false;
    return;
  }
  const availableMovements: number[][] = getAvailableMovements(grid, y, x);

  for (const [y, x] of availableMovements) {
    if (!used[y][x]) {
      dfs(grid, used, y, x, finish, counter);
    }
  }

  used[y][x] = false;
}

function allUsed(used: boolean[][]): boolean {
  for (let i = 0; i < used.length; i++) {
    for (let j = 0; j < used[i].length; j++) {
      if (!used[i][j]) return false;
    }
  }
  return true;
}

function getAvailableMovements(
  grid: number[][],
  y: number,
  x: number
): number[][] {
  const availableMoves: number[][] = [];
  for (const moveDelta of Object.values(MOVES)) {
    const afterMove = { x: x + moveDelta.x, y: y + moveDelta.y };
    if (
      0 <= afterMove.y &&
      afterMove.y < grid.length &&
      0 <= afterMove.x &&
      afterMove.x < grid[0].length &&
      (grid[afterMove.y][afterMove.x] === 0 ||
        grid[afterMove.y][afterMove.x] === 2)
    )
      availableMoves.push([afterMove.y, afterMove.x]);
  }
  return availableMoves;
}

function findStart(grid: number[][]): number[] {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const val = row[colIndex];
      if (val === 1) return [rowIndex, colIndex];
    }
  }
  return [0, 0];
}

function findFinish(grid: number[][]): number[] {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const val = row[colIndex];
      if (val === 2) return [rowIndex, colIndex];
    }
  }
  return [0, 0];
}
