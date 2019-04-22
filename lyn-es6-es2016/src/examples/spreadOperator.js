export function spreadOperator() {

  const powerOfTwo = [2, 4, 8, 16]
  const evenIntegers = [2, 6, 10]

  const evens = [...evenIntegers, ...powerOfTwo]

  console.log('evens = ', evens)


  console.log('Spread operator vs Object')
  const square = {
    base: 2,
    name: 'square'
  }
  console.log('square = ', square)

  const exponent = {
    toPower: (base, num) => {
      return Math.pow(base, num)
    }
  }
  console.log('exponent = ', exponent)

  const squareExponent = {
    toSquare: (num) => exponent.toPower(square.base, num),
    ...exponent,
    ...square
  }
  console.log('squareExponent = ', squareExponent)
  console.log(squareExponent.name, 'of 3 =', squareExponent.toSquare(3))


  const cubeExponent = Object.assign(
    {
      base: 3,
      name: 'cube',
      toCube: (num) => exponent.toPower(cubeExponent.base, num),
    },
    exponent
  )
  console.log('cubeExponent = ', cubeExponent)
  console.log(cubeExponent.name, 'of 3 =', cubeExponent.toCube(3))

}
