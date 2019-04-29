export function constAndLet() {

  var iceCream = "salted caramel"
  console.log("hoisted?", iceCream)

  iceCream = "chocolate"
  console.log("declared", iceCream)

  iceCream = "strawberry"
  console.log("reassigned?", iceCream)

  /*var*/ iceCream = "vanilla"
  console.log("redeclared?", iceCream)


  // gelato = "mango"
  // console.log("hoisted?", gelato)

  const gelato = "lemon"
  console.log("declared", gelato)

  //gelato = "mint"
  console.log("reassigned", gelato)

  //gelato = "almond"
  //console.log("redeclared", gelato)


  let froYo = "brownie"
  console.log("hoisted?", froYo)

  froYo = "cherry"
  console.log("declared", froYo)

  //   froYo = "cheese cake"
  //   console.log("reassigned", froYo)
  //
  //   let froYo = "passion fruit"
  //   console.log("redeclared", froYo )
  //
  //

  // const canIChangeThis = "What is this variable?"
  // console.log(canIchangeThis)
  //
  // canIChangeThis = "Did I change this?"
  // console.log(canIChangeThis)

  // const immutableVar = "What is this var?";
  // console.log(immutableVar);

  // immutableVar = "Did I change this?";
  // console.log(immutableVar);

  const toppings = ["sprinkles", "strawberries"]

  toppings.push("fudge")
  toppings.push("cherry")

  console.log(toppings)

  // ["sprinkles", "strawberries", "fudge", "cherry"]
  //
  Object.freeze(toppings)

  //toppings.push('raisins')

}
