import { Positions } from './types';

export default class GameOfLife {
    private grid: number[][]

    constructor(grid: number[][]) {
        this.grid = grid;
    }

    public run(): number[][] {
        const cellsAfterGeneration = this.updateLivingCellsOnGrid();
        return cellsAfterGeneration;
    }

    private updateLivingCellsOnGrid(): number[][] {
        let aliveOrDead = 0;
        const updatedGrid = this.grid;
        console.log('start');
        console.log(this.grid);

        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid.length; col++) {
                aliveOrDead = this.cellState(this.grid, row, col);
                updatedGrid[row][col] = aliveOrDead;
            }
        }
        console.log('done');
        console.log(updatedGrid);
        return updatedGrid;
    }

    private cellState(grid: number[][], row: number, col: number): number {
        const aliveCount = this.checkNeighbors(grid, row, col);

        if (grid[row][col]) {
            if (aliveCount < 2 || aliveCount > 3) {
                return 0;
            }
            return 1;
        }
        else {
            if (aliveCount === 3) {
                return 1;
            }

            return 0;
        }
    }

    private checkNeighbors(grid: number[][], row: number, col: number): number {
        const { top, topRight, right, bottomRight, bottom, bottomLeft, left, topLeft } = this.positions(grid, row, col);
        let aliveCount = 0;
        aliveCount += this.isNeighborCellAlive(top);
        aliveCount += this.isNeighborCellAlive(topRight);
        aliveCount += this.isNeighborCellAlive(right);
        aliveCount += this.isNeighborCellAlive(bottomRight);
        aliveCount += this.isNeighborCellAlive(bottom);
        aliveCount += this.isNeighborCellAlive(bottomLeft);
        aliveCount += this.isNeighborCellAlive(left);
        aliveCount += this.isNeighborCellAlive(topLeft);

        return aliveCount;
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

    private isNeighborCellAlive(value): number {
        return value;
    }
}
