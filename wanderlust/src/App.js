import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'

function App() {
  return (
    <Container className="App">
      <Header />
    </Container>
  );
}

export default App;