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
  it('should return 2178309 in input 32', () => {
    const input = 32

    const result = fibonnaci(input)

    expect(result).toEqual(2178309)
  })
  it('should return 927372692193078999176 in input 102', () => {
    const input = 102

    const result = fibonnaci(input)

    expect(result).toEqual(927372692193078999176)
  })
})
