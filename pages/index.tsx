import type { NextPage } from 'next'
import Grid from '../components/grid'
import NewButton from '../components/new-button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <h1>Sudoku</h1>
      <div className={styles.card}>
        <NewButton />
        <Grid />
      </div>
    </div>
  )
}

export default Home
