import global from '../../global'
import { GRID, NUMBER } from '../../typings'
import { isInRow, isInCol, identifySquare, isInSquare } from '../../utils'
import checkGrid from '../../utils/check-grid'

const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid 9x9 Sudoku Grid
 */
function solveGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    //                     i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, etc
    row = Math.floor(i / 9) // 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2, etc
    col = i % 9             // 0, 1, 2, 3, 4, 5, 6, 7, 8, 0,  1,  2,  3,  4,  5,  6,  7,  8,  0,  1, etc

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        // is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in grid col?
          if (!isInCol({ grid, col, value })) {
            // is it not in grid square?
            const square = identifySquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              // check grid if it's full, if yes, stop and return
              if (checkGrid(grid)) {
                global.counter++
                break
              }
              // otherwise run fillGrid(grid)
              else if (solveGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }

  grid[row][col] = 0
}

export default solveGrid
