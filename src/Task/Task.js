import React from 'react'
import './Task.css'

const task = ( props ) => {
  return (
    <div className="Task">
      <p>{props.description}</p>
    </div>
  )
}

export default task;