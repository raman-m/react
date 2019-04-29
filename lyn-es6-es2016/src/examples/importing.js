// import MyComp from './exporting'
// import defaultThing from './exporting'
// import MyComponent1 as somethingElse from './exporting'


import defaultThing, {widget as anotherThing, birthdayReminder, ShinyButton, trees} from './exporting'

export function importing() {
    console.log(new defaultThing())
    console.log(anotherThing)
    console.log(birthdayReminder)
    console.log(new ShinyButton())
    console.log(trees)
}
