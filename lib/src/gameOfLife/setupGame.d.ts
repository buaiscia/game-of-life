import { Coordinates } from './types';
export default class SetupGame {
    private coordinates;
    private rows;
    private columns;
    constructor(coordinates: Coordinates[]);
    init(): number[][];
    private initArray;
    private fillArrayWithInput;
    private checkGrid;
    private fillGrid;
}
