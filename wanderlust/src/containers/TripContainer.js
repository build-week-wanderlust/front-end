import React from 'react'
import { Segment, Placeholder, Header } from 'semantic-ui-react'

const TripContainer = () => {
  return (
    <Segment>
      <Header dividing as="h3">
        Experiences
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

export default TripContainer;