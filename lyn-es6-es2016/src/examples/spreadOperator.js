export function spreadOperator() {

  const powerOfTwo = [2, 4, 8, 16]
  const evenIntegers = [2, 6, 10]

  const evens = [...evenIntegers, ...powerOfTwo]

  console.log('evens = ', evens)


  console.log('#--------------------------- \n')
  console.log('# Spread operator vs Object  \n')
  console.log('#--------------------------- \n')

  const square = {
    power: 2,
    name: 'square'
  }
  console.log('square = ', square)

  const exponent = {
    toPower: (base, power) => {
      return Math.pow(base, power)
    }
  }
  console.log('exponent = ', exponent)

  const squareExponent = {
    toSquare: (base) => exponent.toPower(base, square.power),
    ...exponent,
    ...square
  }

  let base = 3
  console.log('squareExponent = ', squareExponent)
  console.log(squareExponent.name, 'of', base, '=', squareExponent.toSquare(base))

  const cubeExponent = Object.assign(
    {
      power: 3,
      name: 'cube',
      toCube: (base) => exponent.toPower(base, cubeExponent.power),
    },
    exponent
  )

  base = 2
  console.log('cubeExponent = ', cubeExponent)
  console.log(cubeExponent.name, 'of', base, '=', cubeExponent.toCube(base))

}
