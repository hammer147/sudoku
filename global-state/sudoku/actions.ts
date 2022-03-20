import { ActionType } from './action-types'
import { BLOCK_COORDS, NUMBER } from '../../typings'
import { SudokuState } from './reducer'

// typing actions

type CreateGridAction = {
  type: ActionType.createGrid
}

type SelectBlockAction = {
  type: ActionType.selectBlock
  payload: BLOCK_COORDS
}

type FillBlockAction = {
  type: ActionType.fillBlock
  payload: {
    value: NUMBER
    coords: BLOCK_COORDS
  }
}

type SetSudokuStateAction = {
  type: ActionType.setSudokuState
  payload: SudokuState
}

// discriminated union (type guard via switch in reducer)

export type SudokuAction = 
  | CreateGridAction
  | SelectBlockAction
  | FillBlockAction
  | SetSudokuStateAction

// action creators

export const createGrid = (): CreateGridAction => ({
  type: ActionType.createGrid
})

export const selectBlock = (coords: BLOCK_COORDS): SelectBlockAction => ({
  type: ActionType.selectBlock,
  payload: coords
})

export const fillBlock = (value: NUMBER, coords: BLOCK_COORDS): FillBlockAction => ({
  type: ActionType.fillBlock,
  payload: {
    value,
    coords
  }
})

export const setSudokuState = (sudokuState: SudokuState): SetSudokuStateAction => ({
  type: ActionType.setSudokuState,
  payload: sudokuState
})
