import React, { Component } from 'react'
import Task from './Task/Task.js'
import ChangeTaskForm from './ChangeForm/ChangeTaskForm.js'
import './App.css'

class App extends Component {
  state = {
    tasks: [
      {id: 't1', description: 'Buy paint'},
      {id: 't2', description: 'Buy profiles'},
      {id: 't3', description: 'Buy plaster boards'}
    ],
    activeTaskToChange: '',
    showTasks: false
  }

  toggleTasksHandler = () => {
    const shouldShow = this.state.showTasks
    this.setState({showTasks: !shouldShow})
  }

  handleChangeTaskForm = (changedTaskDescription) => {
    this.setState({activeTaskToChange: changedTaskDescription})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let activeTasks = null

    if (this.state.showTasks) {
      activeTasks = (
        <div>
          {this.state.tasks.map((task) => {
            return <Task
              description={task.description}/>
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style.color = 'black'
    }

    return (
      <div className="App">
        <h1>Hi dude!</h1>
        <button style={style} onClick={this.toggleTasksHandler}>Show tasks</button>
        <p/>
        {activeTasks}
        <ChangeTaskForm activeTaskToChange={this.handleChangeTaskForm}/>
        <div><p>Child value passed to parent:</p> <b>{this.state.activeTaskToChange}</b></div>
      </div>
    )
  }
}

export default App
