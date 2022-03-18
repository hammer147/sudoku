import { GRID, NUMBER } from '../../../typings'

interface IInput {
  grid: GRID;
  col: number;
  value: NUMBER;
}

/**
 * Returns true if the value is already in the current column
 * @param input Object with 9x9 Sudoku Grid, row index and value
 */
function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) return true
  }
  return false
}

export default isInCol