import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisbleTodoList from '../containers/VisbleTodoList'
import Footer from './Footer'


const App = () => (
  <div>
    <AddTodo />
    <VisbleTodoList />
    <Footer />
  </div>
);

export default App;