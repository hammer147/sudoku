import { useCallback, useContext } from 'react'
import { AppContext } from '../global-state/app-context'
import { fillBlock } from '../global-state/sudoku'
import { NUMBER } from '../typings'
import styles from './number-button.module.css'

type Props = {
  value: NUMBER
}

const NumberButton = ({ value }: Props) => {

  const { state: { sudoku: { selectedBlock, workingGrid } }, dispatch } = useContext(AppContext)
  const selectedValue = workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0

  const fill = useCallback((n: NUMBER): void => {
    if (selectedBlock && selectedValue === 0) dispatch(fillBlock(n, selectedBlock))
  }, [dispatch, selectedBlock, selectedValue])

  return (
    <button
      className={styles.button}
      onClick={() => fill(value)}
    >
      {value}
    </button>
  )
}

export default NumberButton
