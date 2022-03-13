import { useCallback } from 'react'
import { NUMBER } from '../typings'
import styles from './number-button.module.css'

type Props = {
  value: NUMBER
}

const NumberButton = ({ value }: Props) => {

  // TODO

  const fill = useCallback((number: NUMBER): void => {
    // TODO
  }, [])

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
