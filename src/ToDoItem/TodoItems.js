import React, { Component } from 'react'
import '../App.css'
import "./toDoItemDeleteButton.css"
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
            {/* <div className="Finish" onClick={() => this.props.deleteItem(item.key)} >Удалить</div> */}
            <DeleteButton deleteItem={this.props.deleteItem} item = {item}/>

            {/* <div className='CheckBox'>
              <input type="checkbox" checked={this.props.completed} 
                  onChange={() => {this.handleChange()}}
              /> 
            </div> */}
       
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