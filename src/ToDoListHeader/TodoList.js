import React, { Component } from 'react'
import "./header.css"

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
          <form onSubmit={this.props.addItem}>
            <div className='text-field'>
              <label class="text-field__label" for="login">To DO:</label>
              <input
                className='text-field__input'
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button className='text-field__button' type="submit"><span>Add Task</span></button>
            </div>
          </form>
      </div>
    )
  }
}
export default TodoList