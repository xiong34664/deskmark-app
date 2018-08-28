import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,Switch
} from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Df from './pages/Df'
import Lb from './pages/Lb'
import Ss from './pages/Ss'
import Content from './pages/Content'
import './App.css'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class App extends Component {
  
  render() {
    console.log(this)
    return ( 
      <Router>
        <Route render={({location})=>(
          <div className="App">
          <h1>Simple SAP</h1>
          <ul>
            <li><NavLink activeClassName="selected" to="/lb">李白</NavLink></li>
            <li><NavLink activeClassName="selected" to="/df">杜甫</NavLink></li>
            <li><NavLink activeClassName="selected" to="/ss">苏轼</NavLink></li>
          </ul>
          <div className="content">
          <TransitionGroup>
            <Route exact path="/" render={() => <Redirect to="/lb" />} />
             <CSSTransition key={location.key} classNames="example" timeout={{ enter: 500, exit: 300 }} >
              <Switch >
                <Route exact  path="/lb"  component={Lb} />
                <Route exact  path="/df" component={Df}/>
                <Route exact  path="/ss" component={Ss}/>
                <Route component={Lb}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          </div>
        </div>
        )} />
      </Router>
    )
  }
}

export default App
