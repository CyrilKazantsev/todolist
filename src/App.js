import React, { Component } from 'react'
import './App.css'
import TodoList from './ToDoListHeader/TodoList'
import TodoItems from './ToDoItem/TodoItems'
import Filter from './Filter/Filter'
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:'', completed: false},
      filteredItems: [],
    }
    // this.filterState = {
    //   items: [],
    //   currentItem: {text:'', key:''},
    //   completed: false,
    // }
  }
  inputElement =React.createRef();
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), completed: false }
    this.setState({
      currentItem,
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
      filteredItems: filteredItems,
    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '', completed: false },
        filteredItems: items,
      })
    }
  }
  handleComplete = (key, e) => {
    let filteredItemByKey = this.state.items.filter(item => {
      return item.key === key
    })
    filteredItemByKey[0].completed = !filteredItemByKey[0].completed
  }

  

  // Добавление цвета при наведении на дело в списке
  // Можно объединить в одну функцию
  colored = (e) => {
    e.currentTarget.classList.remove("TodoItemsPassive")
    e.currentTarget.classList.add("TodoItemsActive")
  }
  notColored = (e) => {
    e.currentTarget.classList.remove("TodoItemsActive")
    e.currentTarget.classList.add("TodoItemsPassive")
  }

  // Фильтр
  handleFilter = completion => {
    let filteredItems;
    if (completion === "Completed") {
      filteredItems = this.state.items.filter(item => {
        return item.completed === true
      })
    } else if (completion === "Not completed") {
      filteredItems = this.state.items.filter(item => {
        return item.completed === false
      })
    } else {
      filteredItems = this.state.items.filter(item => {
        return item
      })
    }
    const items = [...filteredItems]
    this.setState({
      filteredItems: items,
      currentItem: { text: '', key: '' },
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <div className='Header'>
          <TodoList           
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem} />
        </div>
        <div>
          <Filter 
            handleFilter = {this.handleFilter}
          />
        </div>
        <div className='List'>
          <TodoItems
            entries={this.state.filteredItems} 
            deleteItem={this.deleteItem} 
            onMouseOver={this.colored}
            onMouseLeave={this.notColored}
            handleComplete={this.handleComplete}
          />
        </div>
      </div>
    )
  }
}
export default App