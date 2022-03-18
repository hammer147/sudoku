import { GRID } from '../../typings'

/**
 * Returns true if the grid is full (i.e. no values of 0)
 * @param grid A 9x9 Sudoku grid
 */
function checkGrid(grid: GRID): boolean {
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (grid[i][j] === 0) return false
  //   }
  // }
  // return true
  return !grid.flat().includes(0)
}

export default checkGrid
