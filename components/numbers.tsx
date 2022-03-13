import { NUMBER } from '../typings'
import NumberButton from './number-button'
import styles from './numbers.module.css'

const Numbers = () => {
  return (
    <div className={styles.container}>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBER[]).map(number => (
        <NumberButton key={number} value={number} />
      ))}
    </div>
  )
}

export default Numbers
