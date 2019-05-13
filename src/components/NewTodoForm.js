import React, { Component } from 'react'
import uuid from 'uuid'
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createTodo({ ...this.state, id: uuid(), completed: false })
    this.setState({ task: '' })
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          value={this.state.task}
          onChange={this.handleChange}
          type="text"
          id="task"
          placeholder="new todo..."
          name="task"
        />
        <button disabled={this.state.task.length === 0}>New Todo</button>
      </form>
    )
  }
}

export default NewTodoForm
