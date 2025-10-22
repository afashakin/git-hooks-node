const mult = require('../src/mult')

it('should return the correct multiplication value', () => {
    const result = mult(3,5)
    expect(result).toBe(15)

    
})