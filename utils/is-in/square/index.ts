import { SQUARE, NUMBER } from '../../../typings'

interface IInput {
  square: SQUARE;
  value: NUMBER;
}

/**
 * Returns true if the value is already in the square
 * @param input Object with a 3x3 square and a value
 */
function isInSquare({ square, value }: IInput): boolean {
  // return [...square[0], ...square[1], ...square[2]].includes(value)
  return square.flat().includes(value) // ES2019
}

export default isInSquare