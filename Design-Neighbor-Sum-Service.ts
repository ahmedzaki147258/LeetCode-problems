class NeighborSum {
  n: number;
  grid: number[][];

  constructor(grid: number[][]) {
    this.n = grid.length;
    this.grid = grid;
  }

  adjacentSum(value: number): number {
    let sum = 0;
    const [x, y] = this.getIndex(value);
    if (y + 1 < this.n) sum += this.grid[x][y + 1];
    if (y - 1 >= 0) sum += this.grid[x][y - 1];
    if (x + 1 < this.n) sum += this.grid[x + 1][y];
    if (x - 1 >= 0) sum += this.grid[x - 1][y];
    return sum;
  }

  diagonalSum(value: number): number {
    let sum = 0;
    const [x, y] = this.getIndex(value);
    if (x + 1 < this.n && y + 1 < this.n) {
      sum += this.grid[x + 1][y + 1];
    }
    if (x - 1 >= 0 && y - 1 >= 0) {
      sum += this.grid[x - 1][y - 1];
    }
    if (x + 1 < this.n && y - 1 >= 0) {
      sum += this.grid[x + 1][y - 1];
    }
    if (x - 1 >= 0 && y + 1 < this.n) {
      sum += this.grid[x - 1][y + 1];
    }

    return sum;
  }

  private getIndex(value: number): [number, number] {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (this.grid[i][j] === value) return [i, j];
      }
    }
    return [0, 0];
  }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */