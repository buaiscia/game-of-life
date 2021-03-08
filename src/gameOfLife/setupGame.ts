import { Coordinates, Position, Grid, GridFormat } from './types';

export default class SetupGame {
    private coordinates: Coordinates[];
    private rows: number
    private columns: number;

    constructor(coordinates: Coordinates[], grid: GridFormat) {
        this.coordinates = coordinates;
        this.rows = grid.rows;
        this.columns = grid.columns;
    }

    public init(): Grid {
        try {
            const grid = this.initArray();
            this.fillArrayWithInput(grid);
            return grid;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    private initArray(): Grid {
        if (!this.rows || !this.columns) {
            throw new Error('Missing rows or columns input number');
        }
        const grid = new Array(this.rows);

        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.columns).fill(0);
        }

        return grid;
    }

    private fillArrayWithInput(grid: Grid): void {
        for (let coordinate = 0; coordinate < this.coordinates.length; coordinate++) {
            this.checkGrid(coordinate, grid);
        }
    }

    private checkGrid(coordinate: number, grid: Grid): void {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.fillGrid(coordinate, grid, { row, col });
            }
        }
    }

    private fillGrid(coord: number, grid: Grid, position: Position): void {
        const { row, col } = position;
        if (row === this.coordinates[coord][0] && col === this.coordinates[coord][1]) {
            grid[row][col] = 1;
        }
    }
}
