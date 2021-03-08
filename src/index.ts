
import SetupGame from './gameOfLife/setupGame';
import GameOfLife from './gameOfLife/gameOfLife';
import { Coordinates, GridFormat, Grid } from './gameOfLife/types';

const initCoordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1], [3, 4], [4, 4]];

export const init = (coordinates: Coordinates[] = initCoordinates, grid: GridFormat): Grid => {
    if (!Array.isArray(coordinates) || coordinates[0].constructor !== Array) {
        throw new Error('Wrong format of coordinates');
    }

    if (!grid || !grid.rows || !grid.columns) {
        throw new Error('Missing rows or columns input number');
    }

    const setupGame = new SetupGame(coordinates, grid);
    const createdGrid = setupGame.init();

    const gameOfLife = new GameOfLife(createdGrid);
    const generation = gameOfLife.run();

    return generation;
};
