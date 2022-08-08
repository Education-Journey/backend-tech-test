const factorial = require('../factorial')

describe('~~ Factorial tests ', () => {
  it('should return 1 for 0 input', () => {
    const input = 0

    const result = factorial(input)

    expect(result).toBe(1)
  })
  it('should return 120 for 5 input', () => {
    const input = 5

    const result = factorial(input)

    expect(result).toBe(120)
  })
  it('should return 1 for 1 input', () => {
    const input = 1

    const result = factorial(input)

    expect(result).toBe(1)
  })
  it('should return 2 for 2 input', () => {
    const input = 2

    const result = factorial(input)

    expect(result).toBe(2)
  })
})