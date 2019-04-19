import React, { Component } from 'react'

export default class MyComponent1 {
}


// export default class MyComponent {
//   //some stuff
// }


// export default function() {
//   //get the data
// }


// DOESNT WORK
// export default const mySetup = {
//   environment: 'tropical'
// }



// //-----------------------------------------------
// // Exporting of const variable as default export object
// //
// const mySetup = {
//   environment: 'tropical'
// }
//
// export default mySetup


//-----------------------------------------------
// Sub-exports of additional variables as default
//
export const widget = { /* ... */ }

export function birthdayReminder() {
    /* ... */
    return 'Happy Birthday!'
}

let trees = []

class ShinyButton extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

export { trees, ShinyButton }
