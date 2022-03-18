import { SQUARE } from '../../../typings'
import isInSquare from './'

describe('isInSquare', () => {
  it('returns true when the value is in the square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    expect(isInSquare({ square, value: 6 })).toBeTruthy()
    expect(isInSquare({ square, value: 7 })).toBeTruthy()
  })

  it('returns false when the value is NOT in the square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 0],
      [0, 8, 9]
    ]
    expect(isInSquare({ square, value: 6 })).toBeFalsy()
    expect(isInSquare({ square, value: 7 })).toBeFalsy()
  })

})