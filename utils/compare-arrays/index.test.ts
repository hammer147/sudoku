import compareArrays from '.'

describe('compareArrays', () => {

  it('should return true if 2 one dim arrays are equal', () => {
    const arr1 = [3, 1, 4]
    const arr2 = [3, 1, 4]
    expect(compareArrays(arr1, arr2)).toBeTruthy()
  })

  it('should return false if 2 one dim arrays are not equal', () => {
    const arr1 = [3, 1, 4]
    const arr2 = [4, 1, 3]
    expect(compareArrays(arr1, arr2)).toBeFalsy()
  })

  it('should return true if 2 multi dim arrays are equal', () => {
    const arr1 = [3, 1, 4, [1, 5], 9, 2]
    const arr2 = [3, 1, 4, [1, 5], 9, 2]
    expect(compareArrays(arr1, arr2)).toBeTruthy()
  })

  it('should return false if 2 multi dim arrays are not equal', () => {
    const arr1 = [3, 1, 4, [1, 5], 9, 2]
    const arr2 = [3, 1, 4, [1, 5, 9], 2]
    expect(compareArrays(arr1, arr2)).toBeFalsy()
  })

})