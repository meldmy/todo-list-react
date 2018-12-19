import React, { Component } from 'react'
import Task from './Task/Task.js'
import ChangeTaskForm from './ChangeForm/ChangeTaskForm.js'
import './App.css'

class App extends Component {
  state = {
    tasks: [
      {key: 't1', id: 't1', description: 'Buy paint'},
      {key: 't2', id: 't2', description: 'Buy profiles'},
      {key: 't3', id: 't3', description: 'Buy plaster boards'}
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

  deleteTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks]
    tasks.splice(taskIndex, 1)
    this.setState({tasks: tasks})
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
          <table align="center" >
          {this.state.tasks.map((task, index) => {
            return <Task
              description={task.description}
              click={() => this.deleteTaskHandler(index)}/>
          })}
        </table>
        </div>
        
      )
      style.backgroundColor = 'red'
      style.color = 'black'
    }

    return (
      <div className="App">
        <h1>Hi! {this.state.tasks.length} tasks are open</h1>
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
