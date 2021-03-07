var GameOfLife = (function () {
    function GameOfLife(grid) {
        this.grid = grid;
    }
    GameOfLife.prototype.run = function () {
        var cellsAfterGeneration = this.updateLivingCellsOnGrid();
        return cellsAfterGeneration;
    };
    GameOfLife.prototype.updateLivingCellsOnGrid = function () {
        var aliveOrDead = 0;
        var updatedGrid = this.grid;
        console.log('start');
        console.log(this.grid);
        for (var row = 0; row < this.grid.length; row++) {
            for (var col = 0; col < this.grid.length; col++) {
                aliveOrDead = this.cellState(this.grid, row, col);
                updatedGrid[row][col] = aliveOrDead;
            }
        }
        console.log('done');
        console.log(updatedGrid);
        return updatedGrid;
    };
    GameOfLife.prototype.cellState = function (grid, row, col) {
        var aliveCount = this.checkNeighbors(grid, row, col);
        if (grid[row][col]) {
            if (aliveCount < 2 || aliveCount > 3) {
                return 0;
            }
            return 1;
        }
        else {
            if (aliveCount === 3) {
                return 1;
            }
            return 0;
        }
    };
    GameOfLife.prototype.checkNeighbors = function (grid, row, col) {
        var _a = this.positions(grid, row, col), top = _a.top, topRight = _a.topRight, right = _a.right, bottomRight = _a.bottomRight, bottom = _a.bottom, bottomLeft = _a.bottomLeft, left = _a.left, topLeft = _a.topLeft;
        var aliveCount = 0;
        aliveCount += this.isNeighborCellAlive(top);
        aliveCount += this.isNeighborCellAlive(topRight);
        aliveCount += this.isNeighborCellAlive(right);
        aliveCount += this.isNeighborCellAlive(bottomRight);
        aliveCount += this.isNeighborCellAlive(bottom);
        aliveCount += this.isNeighborCellAlive(bottomLeft);
        aliveCount += this.isNeighborCellAlive(left);
        aliveCount += this.isNeighborCellAlive(topLeft);
        return aliveCount;
    };
    GameOfLife.prototype.positions = function (grid, row, col) {
        var top = row && grid[row - 1][col];
        var topRight = row !== 0 && col < grid.length - 1 && grid[row - 1][col + 1];
        var right = col < grid.length - 1 && grid[row][col + 1];
        var bottomRight = row < grid.length - 1 && col < grid.length - 1 && grid[row + 1][col + 1];
        var bottom = row < grid.length - 1 && grid[row + 1][col];
        var bottomLeft = row < grid.length - 1 && col !== 0 && grid[row + 1][col - 1];
        var left = col !== 0 && grid[row][col - 1];
        var topLeft = row !== 0 && col !== 0 && grid[row - 1][col - 1];
        var position = { top: top, topRight: topRight, right: right, bottomRight: bottomRight, bottom: bottom, bottomLeft: bottomLeft, left: left, topLeft: topLeft };
        return position;
    };
    GameOfLife.prototype.isNeighborCellAlive = function (value) {
        return value;
    };
    return GameOfLife;
}());
export default GameOfLife;
//# sourceMappingURL=gameOfLife.js.map