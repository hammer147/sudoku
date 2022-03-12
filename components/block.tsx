import { INDEX } from '../typings'
import styles from './block.module.css'

type Props = {
  rowIndex: INDEX
  colIndex: INDEX
}

const Block = ({ rowIndex, colIndex }: Props) => {

  const isActive = false
  const isPuzzle = false

  const handleClick = () => { }


  return (
    <div
      className={`${styles.container} ${isActive ? 'active' : ''} ${isPuzzle ? 'puzzle' : ''}`}
      onClick={handleClick}
    >
      0
    </div>
  )
}

export default Block