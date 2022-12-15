const addNumbers = require('../src/addNumbers')

describe('addNumbers - add the numbers in pairs and return the result as a string', () => {
  it('should throw an error if the input strings is an invalid number', () => {
    expect(() => addNumbers()).toThrowError(
      'Input strings must be a valid integer or decimal number'
    )

    expect(() => addNumbers('', '')).toThrowError(
      'Input strings must be a valid integer or decimal number'
    )

    expect(() => addNumbers(' ', '')).toThrowError(
      'Input strings must be a valid integer or decimal number'
    )

    expect(() => addNumbers('abc', '')).toThrowError(
      'Input strings must be a valid integer or decimal number'
    )

    expect(() => addNumbers('1 2', '1. 2')).toThrowError(
      'Input strings must be a valid integer or decimal number'
    )
  })

  it('should throw an error if the input strings have different number of numbers', () => {
    expect(() => addNumbers('1 2 3', '1 2')).toThrowError(
      'Input strings must have the same quantity of numbers'
    )
  })

  it('should add the numbers with carry', () => {
    // Arrange
    const str1 = '9 1'
    const str2 = '1 9'
    const expected = '10 10'

    // Act
    const actual = addNumbers(str1, str2)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('should add a mix of integers and decimals numbers', () => {
    // Arrange
    const str1 = '1 0.34'
    const str2 = '0.23 12'
    const expected = '1.23 12.34'

    // Act
    const actual = addNumbers(str1, str2)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('should add the numbers in pairs', () => {
    // Arrange
    const str1 = '123 456 789'
    const str2 = '11 22 33'
    const expected = '134 478 822'

    // Act
    const actual = addNumbers(str1, str2)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('should add the long numbers', () => {
    // Arrange
    const str1 = '123456789012345678901 23456789'
    const str2 = '12345678 234567890123456789012'
    const expected = '123456789012358024579 234567890123480245801'

    // Act
    const actual = addNumbers(str1, str2)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('should add the decimal numbers', () => {
    // Arrange
    const str1 = '1234567.8901 2.345'
    const str2 = '12.34 2345678901.2'
    const expected = '1234580.2301 2345678903.545'

    // Act
    const actual = addNumbers(str1, str2)

    // Assert
    expect(actual).toEqual(expected)
  })
})


