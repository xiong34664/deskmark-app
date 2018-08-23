import React, {Component} from 'react'
import './style.css'

const obj = {
  name: 'xx',
  age: 18
}

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.clickList = this.clickList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  clickList(e) {
    console.log(e.target.dataset.id)
    console.log(e.target.innerText)
    console.log(e.target.getAttribute)
    console.dir(this.refs.list.getAttribute("name"))
    
  }
  handleChange(e) {
    
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div {...obj} data-id={1} onClick={this.clickList} ref="list">
        {this.state.value}
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
