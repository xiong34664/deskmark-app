import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <from onSubmit={e=>{
        e.preventDefault()
        if(!this.refs.input.value.trim()) return
        dispatch(addTodo(this.refs.input.value))
        this.refs.input.value = ""
      }}>
        <input ref="input"/>
        <button type="submit">Add Todo</button>
      </from>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo