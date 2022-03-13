import { INDEX } from '../typings'
import Block from './block'
import styles from './grid.module.css'

const Grid = () => {

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