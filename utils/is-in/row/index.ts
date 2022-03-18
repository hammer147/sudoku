import { GRID, NUMBER } from '../../../typings'

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBER;
}

/**
 * Returns true if the value is already in the current row
 * @param input Object with 9x9 Sudoku Grid, row index and value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow
