import { Coordinates, GridFormat } from '../gameOfLife/types';
import { init } from '../index';

const coordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1]];
const gridFormat: GridFormat = {
    rows: 5,
    columns: 5
};

describe('e2e test', () => {
    it('should return array of values and first index value as 1', () => {
        const updatedGrid = init(coordinates, gridFormat);
        expect(updatedGrid[0][0]).toBe(1);
    });

    it('should throw an error with wrong array format', () => {
        const coordinates = [1, 2];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => init(coordinates, gridFormat)).toThrowError(/Wrong format of coordinates/);
    });

    it('should throw an error with no array input', () => {
        const coordinates = 5;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => init(coordinates, gridFormat)).toThrowError(/Wrong format of coordinates/);
    });

    it('should continue without array element out of boundary', () => {
        const newCoordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 20], [20, 1]];
        const updatedGrid = init(newCoordinates, gridFormat);
        expect(updatedGrid[0][0]).toBe(1);
    });

    it('should throw an error without grid format specification', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => init(coordinates)).toThrowError(/Missing rows or columns input number/);
    });
});
