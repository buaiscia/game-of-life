import { Positions } from './types';

export default class GameOfLife {
    private grid: Array<number>[]

    constructor(grid: Array<number>[]) {
        this.grid = grid;
    }

    public run(): void {
        this.updateLivingCellsOnGrid();
    }

    private updateLivingCellsOnGrid(): void {
        let aliveOrDead = 0;
        console.log('start');
        console.log(this.grid);

        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid.length; col++) {
                aliveOrDead = this.checkNeighbors(this.grid, row, col);
                this.grid[row][col] = aliveOrDead;
            }
        }
        console.log('done');
        console.log(this.grid);
    }

    private checkNeighbors(grid: number[][], row: number, col: number): number {
        const { top, topRight, right, bottomRight, bottom, bottomLeft, left, topLeft } = this.positions(grid, row, col);
        let alive = 0;
        alive += this.checkNeighborCell(top);
        alive += this.checkNeighborCell(topRight);
        alive += this.checkNeighborCell(right);
        alive += this.checkNeighborCell(bottomRight);
        alive += this.checkNeighborCell(bottom);
        alive += this.checkNeighborCell(bottomLeft);
        alive += this.checkNeighborCell(left);
        alive += this.checkNeighborCell(topLeft);

        if (grid[row][col]) {
            if (alive < 2 || alive > 3) {
                return 0;
            }
            return 1;
        }
        else {
            if (alive === 3) {
                return 1;
            }

            return 0;
        }
    }

    private positions(grid: number[][], row: number, col: number): Positions {
        const top = row && grid[row - 1][col];
        const topRight = row !== 0 && col < grid.length - 1 && grid[row - 1][col + 1];
        const right = col < grid.length - 1 && grid[row][col + 1];
        const bottomRight = row < grid.length - 1 && col < grid.length - 1 && grid[row + 1][col + 1];
        const bottom = row < grid.length - 1 && grid[row + 1][col];
        const bottomLeft = row < grid.length - 1 && col !== 0 && grid[row + 1][col - 1];
        const left = col !== 0 && grid[row][col - 1];
        const topLeft = row !== 0 && col !== 0 && grid[row - 1][col - 1];

        const position = { top, topRight, right, bottomRight, bottom, bottomLeft, left, topLeft };
        return position;
    }

    private checkNeighborCell(value): number {
        return value;
    }
}
