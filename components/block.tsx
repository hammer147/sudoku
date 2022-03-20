import { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { selectBlock } from '../context/sudoku'
import { INDEX } from '../typings'
import styles from './block.module.css'

type Props = {
  rowIndex: INDEX
  colIndex: INDEX
}

const Block = ({ rowIndex, colIndex }: Props) => {

  const { state: { sudoku: { workingGrid, selectedBlock, challengeGrid } }, dispatch } = useContext(AppContext)

  const isActive = !!selectedBlock && selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
  const isPuzzle = challengeGrid && challengeGrid[rowIndex][colIndex] === 0

  const handleClick = () => {
    if (!isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ''} ${isPuzzle ? styles.puzzle : ''}`}
      onClick={handleClick}
    >
      {(!workingGrid || workingGrid[rowIndex][colIndex] === 0) ? '' : workingGrid[rowIndex][colIndex]}
    </div>
  )
}

export default Block
