import React, { Component } from 'react'
import './App.css'

import List from './components/List'
import ListItem from './components/ListItem'
import CreateBar from './components/CreateBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateBar />
      </div>
    );
  }
}

export default App
