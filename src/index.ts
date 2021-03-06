
import GameOfLife from './gameOfLife';
import { Coordinates } from './gameOfLife/types';

export default class InitGame {
    private coordinates: Coordinates[];
    private cycles: number;
    private rows: number
    private columns: number;

    constructor(coordinates: Coordinates[], cycles: number) {
        this.coordinates = coordinates;
        this.cycles = cycles;
        this.rows = 5;
        this.columns = 5;
    }

    public init(): number[][] {
        const grid = this.initArray();
        this.fillArrayWithInput(grid);
        return grid;
    }

    private initArray(): number[][] {
        const grid = new Array(this.rows);

        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.columns).fill(0);
        }

        return grid;
    }

    private fillArrayWithInput(grid: number[][]): void {
        for (let coordinate = 0; coordinate < this.coordinates.length; coordinate++) {
            this.checkGrid(coordinate, grid);
        }
    }

    private checkGrid(coordinate: number, grid: number[][]): void {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.fillGrid(coordinate, grid, { row, col });
            }
        }
    }

    private fillGrid(coord: number, grid: number[][], { row, col }): void {
        if (row === this.coordinates[coord][0] && col === this.coordinates[coord][1]) {
            grid[row][col] = 1;
        }
    }
}

const initGame = new InitGame([[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1]], 2);

const grid = initGame.init();

const gameOfLife = new GameOfLife(grid);

gameOfLife.run();

