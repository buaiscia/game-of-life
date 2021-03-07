import SetupGame from './gameOfLife/setupGame';
import GameOfLife from './gameOfLife/gameOfLife';
var initCoordinates = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1], [3, 4], [4, 4]];
export var init = function (coordinates) {
    if (coordinates === void 0) { coordinates = initCoordinates; }
    var setupGame = new SetupGame(coordinates);
    var grid = setupGame.init();
    var gameOfLife = new GameOfLife(grid);
    var generation = gameOfLife.run();
    return generation;
};
//# sourceMappingURL=index.js.map