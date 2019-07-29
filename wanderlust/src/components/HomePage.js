import React from 'react'
import { Segment, Header, Placeholder } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment>
      <Header as="h1">
        WanderLust
      </Header>
      <Segment>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Segment>
  )
}

export default HomePage;