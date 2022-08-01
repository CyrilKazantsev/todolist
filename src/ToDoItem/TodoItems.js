import React, { Component } from 'react'
import '../App.css'
import Slider from '../Slider/Slider'
import DeleteButton from '../Button/button'
class TodoItems extends Component {
    constructor() {
        super()
        this.state = {
          completed: false,
        }
      }
      handleChange = (e) => {
        this.setState({
          completed: !this.state.completed
        })
      }
createTasks = item => {
    return (
        <div 
            key={item.key} 
            onMouseOver={this.props.onMouseOver}
            onMouseLeave={this.props.onMouseLeave}
            className="TodoItems"
        >
            <div>
              <Slider handleComplete={this.props.handleComplete} item = {item}/>
            </div>
            <div className='ToDoText'>
              {item.text}
            </div>
            <DeleteButton deleteItem={this.props.deleteItem} item = {item}/>
        </div>
     )
    }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems