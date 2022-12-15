const fibonnaci = require("../fibonnaci")

describe('~~ Fibonnaci tests', () => {
  it('should return input in initial cases', () => {
    const input = 1

    const result = fibonnaci(input)

    const secondInput = 0

    const secondInputResult = fibonnaci(secondInput)

    expect(result).toEqual(input)
    expect(secondInputResult).toEqual(secondInputResult)
  })
  it('should return 3 in input 2', () => {
    const input = 3

    const result = fibonnaci(input)

    expect(result).toEqual(2)
  })
  it('should return 18 in input 2584', () => {
    const input = 18

    const result = fibonnaci(input)

    expect(result).toEqual(2584)
  })
  it('should return 6765 in input 20', () => {
    const input = 20 

    const result = fibonnaci(input)

    expect(result).toEqual(6765)
  })
  it('should return 1134903170 in input 45', () => {
    const input = 45

    const result = fibonnaci(input)

    expect(result).toEqual(1134903170)
  })
})
