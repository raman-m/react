export function functionArgs () {

  function getEmAll(...args) {
    console.log(args)
  }
  
  function setSomeDefaults(myString = "", aList = []) {
    console.log(myString, aList)
  }
  
  
  function configurationThing({monsterSize, boatCapacity}) {
    console.log(monsterSize, boatCapacity)
  }

  console.log('### getEmAll')
  const numbers = [1, 2, 3, 4]
  getEmAll(numbers)
  getEmAll(1, 'one')

  console.log('### setSomeDefaults')
  setSomeDefaults()
  setSomeDefaults('string')
  setSomeDefaults('string2', numbers)

  console.log('### configurationThing')
  // configurationThing() // Exception
  const monsterPolicy = {
    monsterSize: 'XXL',
    boatCapacity: '3',
    isMonstersInBoatAllowed: false,
  }
  configurationThing(monsterPolicy)
}
