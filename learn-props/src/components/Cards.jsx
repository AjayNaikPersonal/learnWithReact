import React from 'react'

// const Cards = (props) => {
//     console.log(props)
//   return (
//     <div>
//       <h3>my name is {props.myobj.name} and i am {props.myobj.age} years old.</h3>
//     </div>
//   )
// }

const Cards = (props) => {
    console.log(props)
  return (
    <div>
      <h3>my name is {props.name} and i am {props.age || 30} years old.</h3>
    </div>
  )
}

export default Cards
