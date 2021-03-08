import { init } from './lib/src/index.js';

const coordinates = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1]];

const grid = {
    rows: 5,
    columns: 5
};

const newLifeGrid = init(coordinates, grid);

console.log(newLifeGrid);
