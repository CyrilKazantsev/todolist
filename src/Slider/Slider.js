import React, { Component } from 'react'
import "./slider.css"
class Slider extends Component {
  render() {
    return (
      <div className="CheckBox">
        <div class="wrapper">
            <div>
                <input 
                  type="checkbox" 
                  className="switch_1" 
                  onClick={(e) => {
                    this.props.handleComplete(this.props.item.key);

                    }  
                  }
                  defaultChecked={this.props.item.completed}
                  />
            </div>
        </div>
      </div>
    )
  }
}
export default Slider