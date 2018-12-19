import React from 'react'
import './Task.css'

const task = (props) => {
  return (
    <div className="Task">
        <tr>
          <td>{props.description}</td>
          <td><button onClick={props.click}>Remove</button></td>
        </tr>
    </div>
  )
}

export default task
