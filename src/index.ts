
import SetupGame from './gameOfLife/setupGame';
import GameOfLife from './gameOfLife/gameOfLife';
import { Coordinates } from './gameOfLife/types';

const initCoordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1], [3, 4], [4, 4]];

export const init = (coordinates: Coordinates[] = initCoordinates): number[][] => {
    if (!Array.isArray(coordinates) || coordinates[0].constructor !== Array) {
        throw new Error('Wrong format of coordinates');
    }

    const setupGame = new SetupGame(coordinates);
    const grid = setupGame.init();

    const gameOfLife = new GameOfLife(grid);
    const generation = gameOfLife.run();

    return generation;
};
