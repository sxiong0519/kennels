import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)  //React Hook: {usestate} officially defines a state in react - when you call it ... it returns an array - specifically 2 things: initial value for your state,

  // const handleClick = () => {
  //   //good practice:
  //   //make a copy of state, modifiy it, and then setState to the copy
  //   const newCountClicks = ++countClicks
  //   setCountClicks(newCountClicks)
  // }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      {/* <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>   */}
    </>
    // onClick = function - during onClick "call" handleClick... line 6
  )
}
