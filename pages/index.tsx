import type { NextPage } from 'next'
import Grid from '../components/grid'
import NewButton from '../components/new-button'
import Numbers from '../components/numbers'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <h1>Sudoku</h1>
      <div className={styles.card}>
        <NewButton />
        <Grid />
        <Numbers />
      </div>
    </div>
  )
}

export default Home
