
import GameOfLife from './gameOfLife';

const grid = new Array(3);

for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(3).fill(0);
}

const living = 1;
grid[0][1] = living;
grid[0][2] = living;
grid[1][0] = living;
grid[1][1] = living;
grid[1][2] = living;
grid[2][1] = living;

const gameOfLife = new GameOfLife(grid);

gameOfLife.run();

