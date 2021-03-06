
import SetupGame from './gameOfLife/setupGame';
import GameOfLife from './gameOfLife/gameOfLife';
import { Coordinates } from './gameOfLife/types';

const initCoordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1], [3, 4], [4, 4]];

function init(coordinates: Coordinates[] = initCoordinates): number[][] {
    const setupGame = new SetupGame(coordinates);
    const grid = setupGame.init();

    const gameOfLife = new GameOfLife(grid);
    const generation = gameOfLife.run();

    return generation;
}

export default init();
