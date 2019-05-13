import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      task: this.props.task
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleUpdate(e) {
    e.preventDefault()
    // take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.toggleEdit()
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result

    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <li
            className={this.props.completed ? 'completed' : ''}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <button onClick={this.toggleEdit}>EDIT</button>
          <button onClick={this.handleRemove}>DELETE</button>
        </div>
      )
    }

    return result
  }
}

export default Todo
