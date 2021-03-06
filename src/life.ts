export default class Life {
    private grid: Array<number>[]

    constructor(grid) {
        this.grid = grid;
    }

    private checkTop(grid, row, col) {
        if (row !== 0 && grid[row - 1][col]) {
            return 1;
        }
        return 0;
    }

    private checkTopRight(grid, row, col) {
        if (row !== 0 && col < grid.length - 1 && grid[row - 1][col + 1]) {
            return 1;
        }
        return 0;
    }

    private checkRight(grid, row, col) {
        if (col < grid.length - 1 && grid[row][col + 1]) {
            return 1;
        }
        return 0;
    }

    private checkBottomRight(grid, row, col) {
        if (row < grid.length - 1 && col < grid.length - 1 && grid[row + 1][col + 1]) {
            return 1;
        }
        return 0;
    }

    private checkBottom(grid, row, col) {
        if (row < grid.length - 1 && grid[row + 1][col]) {
            return 1;
        }
        return 0;
    }

    private checkBottomLeft(grid, row, col) {
        if (row < grid.length - 1 && col !== 0 && grid[row + 1][col - 1]) {
            return 1;
        }
        return 0;
    }

    private checkLeft(grid, row, col) {
        if (col !== 0 && grid[row][col - 1]) {
            return 1;
        }
        return 0;
    }

    private checkTopLeft(grid, row, col) {
        if (row !== 0 && col !== 0 && grid[row - 1][col - 1]) {
            return 1;
        }
        return 0;
    }


    private checkNeighbors(grid, row, col) {
        let alive = 0;
        alive += this.checkTop(grid, row, col);
        alive += this.checkTopRight(grid, row, col);
        alive += this.checkRight(grid, row, col);
        alive += this.checkBottomRight(grid, row, col);
        alive += this.checkBottom(grid, row, col);
        alive += this.checkBottomLeft(grid, row, col);
        alive += this.checkLeft(grid, row, col);
        alive += this.checkTopLeft(grid, row, col);

        if (grid[row][col]) {
            // console.log('neighbors alive: ' + alive);
            if (alive < 2 || alive > 3) {
                return 0;
            }

            return 1;
        }
        else {
            // console.log('dead alive neighbors: ' + alive);
            if (alive === 3) {
                return 1;
            }

            return 0;
        }
    }

    public life() {
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
}
