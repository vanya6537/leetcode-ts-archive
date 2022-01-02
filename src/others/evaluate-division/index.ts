export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  // Here we initialize our graph representation as hashMap
  const hashMap: { [key: string]: { [key: string]: number } } = {};
  equations.forEach(([l, r], index) => {
    // console.log(index, l + "/" + r + " = " + values[index]);
    // console.log(index, r + "/" + l + " = " + 1 / values[index]);

    if (hashMap[l]) {
      hashMap[l][r] = values[index];
    } else {
      hashMap[l] = { [r]: values[index] };
    }
    if (hashMap[r]) {
      hashMap[r][l] = 1 / values[index];
    } else {
      hashMap[r] = { [l]: 1 / values[index] };
    }
  });

  const result: number[] = [];
  for (const [start, end] of queries) {
    result.push(findProductDFS(start, end, {}, hashMap));
  }
  return result;
}

function findProductDFS(
  start: string,
  end: string,
  visited: { [key: string]: boolean },
  graph: { [key: string]: { [key: string]: number } }
): number {
  if (!(start in graph)) return -1;
  if (start === end) return 1;
  visited[start] = true;

  // Iterate through all neighbours
  for (const neighbour in graph[start]) {
    //If neighbour is not visited - find product from it to the end
    if (!(neighbour in visited)) {
      // Calculate product from neighbour to the end
      const product = findProductDFS(neighbour, end, visited, graph);
      // If product exists - multiply and return
      if (product !== -1) return product * graph[start][neighbour];
    }
  }
  return -1;
}
