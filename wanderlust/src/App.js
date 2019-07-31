import React from 'react';
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
import ContactPage from './components/ContactPage'
import LoginForm from './components/LoginForm'
import AddExperienceForm from './components/AddExperienceForm'
import AddUserForm from './components/AddUserForm'

function App() {
  return (
    <Container className="app">
      <Header />
      <Route exact path="/" component={LoginForm}/>
      <Route exact path="/new_user" component={AddUserForm}/>
      <Route exact path="/experiences" component={TripContainer} />  
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/experiences/new_experience" component={AddExperienceForm} />
  </Container>
  );
}

export default App;


// https://brudnak-wanderlust.herokuapp.com/experiences/experiences/?sort=price