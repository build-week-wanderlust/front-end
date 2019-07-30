import React from 'react'
import { Segment, Header, Placeholder } from 'semantic-ui-react';
import FormContainer from '../containers/FormContainer'

const HomePage = () => {
  return (
    <Segment>
      <Header as="h1">
        Wanderlust
      </Header>
      <Segment>
        <FormContainer />
      </Segment>
    </Segment>
  )
}

export default HomePage;