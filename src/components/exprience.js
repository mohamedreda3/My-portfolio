import React from 'react'

function Exprience(props) {
  return (
    <p className='exp' style={{'--width':props.width}}>{props.title}&nbsp;({props.width})</p>
  )
}

export default Exprience