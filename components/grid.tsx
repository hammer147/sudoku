import { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../global-state/app-context'
import { createGrid, fillBlock, selectBlock } from '../global-state/sudoku'
import { INDEX, NUMBER } from '../typings'
import Block from './block'
import styles from './grid.module.css'

const Grid = () => {

  const { state: { sudoku: { selectedBlock, workingGrid, solvedGrid } }, dispatch } = useContext(AppContext)

  const selectedValue = workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0

  useEffect(() => {
    if (!solvedGrid) dispatch(createGrid()) // we might have a solvedGrid from the start (from localStorage)
  }, [dispatch, solvedGrid])


  // functions that dispatch an action

  const fill = useCallback((n: NUMBER): void => {
    if (selectedBlock && selectedValue === 0) dispatch(fillBlock(n, selectedBlock))
  }, [dispatch, selectedBlock, selectedValue])

  const moveUp = useCallback(() => {
    if (selectedBlock && selectedBlock[0] > 0) {
      dispatch(selectBlock([selectedBlock[0] - 1 as INDEX, selectedBlock[1]]))
    }
  }, [dispatch, selectedBlock])

  const moveDown = useCallback(() => {
    if (selectedBlock && selectedBlock[0] < 8) {
      dispatch(selectBlock([selectedBlock[0] + 1 as INDEX, selectedBlock[1]]))
    }
  }, [dispatch, selectedBlock])

  const moveLeft = useCallback(() => {
    if (selectedBlock && selectedBlock[1] > 0) {
      dispatch(selectBlock([selectedBlock[0], selectedBlock[1] - 1 as INDEX]))
    }
  }, [dispatch, selectedBlock])

  const moveRight = useCallback(() => {
    if (selectedBlock && selectedBlock[1] < 8) {
      dispatch(selectBlock([selectedBlock[0], selectedBlock[1] + 1 as INDEX]))
    }
  }, [dispatch, selectedBlock])


  // key input

  const handleKeyDown = useCallback(({ key }: KeyboardEvent) => {
    switch (key) {
      case '1': return fill(1)
      case '2': return fill(2)
      case '3': return fill(3)
      case '4': return fill(4)
      case '5': return fill(5)
      case '6': return fill(6)
      case '7': return fill(7)
      case '8': return fill(8)
      case '9': return fill(9)
      case 'ArrowUp': return moveUp()
      case 'ArrowDown': return moveDown()
      case 'ArrowLeft': return moveLeft()
      case 'ArrowRight': return moveRight()
      default: return
    }
  }, [fill, moveUp, moveDown, moveLeft, moveRight])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])


  return (
    <div className={styles.grid}>
      {Array.from({ length: 9 }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.from({ length: 9 }).map((_, colIndex) => (
            <Block key={colIndex} rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
