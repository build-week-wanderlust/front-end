import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
import ContactPage from './components/ContactPage'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <Container className="app">
      <Header />
      <Route exact path="/" component={LoginForm}/>
      <Route exact path="/experiences" component={TripContainer} />  
      <Route exact path="/contact" component={ContactPage} />
  </Container>
  );
}

export default App;


// https://brudnak-wanderlust.herokuapp.com/experiences/experiences/?sort=price