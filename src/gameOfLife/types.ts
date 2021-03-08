
export type Coordinates = [number, number]
export interface Positions {
    top: number;
    topRight: number;
    right: number;
    bottomRight: number;
    bottom: number;
    bottomLeft: number;
    left: number;
    topLeft: number
}

export interface Position {
    row: number;
    col: number;
}

export interface GridFormat {
    rows: number;
    columns: number;
}

export type Grid = number[][]
