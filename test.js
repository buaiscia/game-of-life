import { init } from './lib/src/index.js';

const newLifeGrid = init([[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1], [10, 10]]);

console.log(newLifeGrid);
