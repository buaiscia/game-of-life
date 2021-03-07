import { Coordinates, Position } from './types';

export default class SetupGame {
    private coordinates: Coordinates[];
    private rows: number
    private columns: number;

    constructor(coordinates: Coordinates[]) {
        this.coordinates = coordinates;
        this.rows = 5;
        this.columns = 5;
    }

    public init(): number[][] {
        try {
            const grid = this.initArray();
            this.fillArrayWithInput(grid);
            return grid;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    private initArray(): number[][] {
        const grid = new Array(this.rows);

        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.columns).fill(0);
        }

        return grid;
    }

    private fillArrayWithInput(grid: number[][]): void {
        try {
            for (let coordinate = 0; coordinate < this.coordinates.length; coordinate++) {
                // console.log(this.coordinates[coordinate]);

                // // eslint-disable-next-line max-depth
                // if (this.coordinates[coordinate][0] > this.rows || this.coordinates[coordinate][1] > this.columns) {
                //     this.coordinates.splice(coordinate, 1);
                //     // throw new Error(`Set of coordinate is bigger than max ${this.rows} or max ${this.columns}`);
                //     continue;
                // }

                this.checkGrid(coordinate, grid);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    private checkGrid(coordinate: number, grid: number[][]): void {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.fillGrid(coordinate, grid, { row, col });
            }
        }
    }

    private fillGrid(coord: number, grid: number[][], position: Position): void {
        const { row, col } = position;
        if (row === this.coordinates[coord][0] && col === this.coordinates[coord][1]) {
            grid[row][col] = 1;
        }
    }
}
