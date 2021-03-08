import { Coordinates } from '../gameOfLife/types';
import { init } from '../index';

describe('e2e test', () => {
    it('should return array of values', () => {
        const coordinates: Coordinates[] = [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 1]];
        const updatedGrid = init(coordinates);
        expect(updatedGrid[0][0]).toBe(1);
    });

    it('should throw an error with wrong array format', () => {
        const coordinates = [1, 2];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => init(coordinates)).toThrowError(/Wrong format of coordinates/);
    });

    it('should throw an error with no array input', () => {
        const coordinates = 5;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => init(coordinates)).toThrowError(/Wrong format of coordinates/);
    });
});
