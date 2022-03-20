import { useCallback, useContext } from 'react'
import { AppContext } from '../context/app-context'
import { createGrid } from '../context/sudoku'
import styles from './new-button.module.css'

const NewButton = () => {

  const { dispatch } = useContext(AppContext)

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure? Previous progress will be lost.')) dispatch(createGrid())
  }, [dispatch])

  return (
    <button className={styles.button} onClick={createNewGrid}>
      New Game
    </button>
  )
}

export default NewButton
