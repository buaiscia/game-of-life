export default class GameOfLife {
    private grid;
    constructor(grid: number[][]);
    run(): number[][];
    private updateLivingCellsOnGrid;
    private cellState;
    private checkNeighbors;
    private positions;
    private isNeighborCellAlive;
}
