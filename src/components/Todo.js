import React, { Component } from 'react'

class Todo extends Component {
    constructor(props)  {
        super(props)
    }

    render() {
        return (
            <div>
                <li>
                {this.props.task}
                <button>EDIT</button>
                <button>DELETE</button>
                </li>
            </div>
        )
    }
}

export default Todo