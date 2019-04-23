import { randomInt } from '../utils'

export function templateLiterals() {

  console.log(
`#---------------------------------------------------
# Template literals example: "Exponential function" 
#---------------------------------------------------`);

  const base = randomInt(0, 10);
  const exponents = [-1, 0, 0.5, 1, 2, 3, 4];

  console.log(`base = ${base}`); // template
  console.log('exponents =', exponents);

  exponents
    .map((power) => Math.pow(base, power))
    .forEach((value, index) => {
      console.log(`${base}^${exponents[index]} = ${value}`) // template
    });


  console.log(
`#---------------------------------------------
# Template literals example: "Word reflector"
#---------------------------------------------`);

  const words = ['a', 'ab', 'abc', 'abcd', '12345'];
  console.log('words =', words);

  words
    .map((word) => word.split('').reverse().join(''))
    .forEach((reversedWord, index) => {
      console.log(`Reversed word of '${words[index]}' is '${reversedWord}'`) // template
    });

}