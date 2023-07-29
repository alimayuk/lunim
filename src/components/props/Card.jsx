import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='serviceCard'>
    <span className='icons'>{props.icon}</span>
    <h1>{props.h1text}</h1>
    <p>{props.ptext}</p>
    <Link>{props.btntext}</Link>
    </div>
  )
}

export default Card