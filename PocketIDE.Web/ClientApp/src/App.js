import './public/index.css'
import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Route } from 'react-router'
import Home from './components/Home'
import ProjectScreen from './components/ProjectScreen'
import Topnav from './components/Topnav'

export default class App extends Component {
  render() {
    return (
      <>
        <Topnav />
        <Route exact path='/' component={Home} />
        <Route path='/project' component={ProjectScreen} />
      </>
    );
  }
}
