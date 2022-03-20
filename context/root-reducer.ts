import { initialSudokuState, SudokuAction, sudokuReducer, SudokuState } from './sudoku'

export type RootState = {
  sudoku: SudokuState // ReturnType<typeof sudokuReducer>
}

export const initialRootState: RootState = {
  sudoku: initialSudokuState
}

// union type for the actions
export type Action = SudokuAction // | AnotherFeatureAction | YetAnotherFeatureAction | etc

// combining the reducers
export const rootReducer = (state: RootState, action: Action): RootState => ({
  ...state,
  sudoku: sudokuReducer(state.sudoku, action as SudokuAction)
})
