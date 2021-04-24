import './public/index.css'
import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Route } from 'react-router'
import Home from './components/Home'
import Topnav from './components/Topnav'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Topnav />
        <Container>
          <Route exact path='/' component={Home} />
        </Container>
      </>
    );
  }
}
