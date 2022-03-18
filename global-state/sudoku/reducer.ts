import { BLOCK_COORDS, GRID } from '../../typings'
import { ActionType } from './action-types'
import { SudokuAction } from './actions'
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from '../../utils'

export type SudokuState = {
  solvedGrid?: GRID
  challengeGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_COORDS
}

export const initialSudokuState: SudokuState = {}

export const sudokuReducer = (state: SudokuState, action: SudokuAction): SudokuState => {
  switch (action.type) {

    case ActionType.createGrid:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        solvedGrid,
        challengeGrid,
        workingGrid
      }

    case ActionType.selectBlock:
      return {
        ...state,
        selectedBlock: action.payload
      }

    case ActionType.fillBlock:
      if (state.solvedGrid && state.workingGrid) {
        // incorrect value
        if (state.solvedGrid[action.payload.coords[0]][action.payload.coords[1]] !== action.payload.value) {
          alert('Incorrect Value!') // runs twice in development due to StrictMode
          return state
        }
        // correct value
        const newWorkingGrid = [...state.workingGrid]
        newWorkingGrid[action.payload.coords[0]][action.payload.coords[1]] = action.payload.value
        if (compareArrays(newWorkingGrid, state.solvedGrid)) {
          alert('Completed!') // runs twice in development due to StrictMode
          return { ...state, workingGrid: newWorkingGrid as GRID }
        }
      }
      return state

    default:
      return state
  }
}
