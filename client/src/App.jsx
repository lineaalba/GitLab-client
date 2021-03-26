import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IsLoggedIn from './components/IsLoggedIn'
import './App.css'
import Home from './components/Home'
import LoginOrLogout from './components/LoginOrLogout'
import Dashboard from './components/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <IsLoggedIn />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginOrLogout} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    )
  }
}



