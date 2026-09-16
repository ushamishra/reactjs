import React from 'react'
import Button from './shared/Button'

// function Card({children,buttonText,theme}) {
//   return (
  
//      <div>
//       <p>{children}</p>
//       <Button theme={theme}>{buttonText}</Button>
//     </div>
//   )
// }

function Card(props) {
  return (
  
     <div>
      <p>{props.children}</p>
      <Button theme={props.theme} buttonicon={props.buttonicon}>{props.buttonText}</Button>
    </div>
  )
}

export default Card