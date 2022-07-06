import React from 'react'

function Color(props) {
  return (
    <span className='color' id={props.color} onClick={(e) => props.func(e)} style={{background : props.color}}></span>
  )
}

export default Color