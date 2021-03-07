var SetupGame = (function () {
    function SetupGame(coordinates) {
        this.coordinates = coordinates;
        this.rows = 5;
        this.columns = 5;
    }
    SetupGame.prototype.init = function () {
        var grid = this.initArray();
        this.fillArrayWithInput(grid);
        return grid;
    };
    SetupGame.prototype.initArray = function () {
        var grid = new Array(this.rows);
        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.columns).fill(0);
        }
        return grid;
    };
    SetupGame.prototype.fillArrayWithInput = function (grid) {
        for (var coordinate = 0; coordinate < this.coordinates.length; coordinate++) {
            this.checkGrid(coordinate, grid);
        }
    };
    SetupGame.prototype.checkGrid = function (coordinate, grid) {
        for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.columns; col++) {
                this.fillGrid(coordinate, grid, row, col);
            }
        }
    };
    SetupGame.prototype.fillGrid = function (coord, grid, row, col) {
        if (row === this.coordinates[coord][0] && col === this.coordinates[coord][1]) {
            grid[row][col] = 1;
        }
    };
    return SetupGame;
}());
export default SetupGame;
//# sourceMappingURL=setupGame.js.map