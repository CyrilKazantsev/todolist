import React, { Component } from 'react'
import "./filter.sass"

class Filter extends Component {
    handleChange = e => {
        return this.props.handleFilter(e.target.options[e.target.options.selectedIndex].value)
    }
  render() {
    return (
       <>
        <form className="filter-menu">
         <label for="seriesInput" className='filter-text'>Filter by completion</label>
         <select id="seriesInput" ref="seriesInput" className='drop-list' onChange={this.handleChange}>
           <option value="All">All</option>
           <option value="Completed">Completed</option>
           <option value="Not completed">Not completed</option>
         </select>
       </form>
       </>
    )
}
}
export default Filter