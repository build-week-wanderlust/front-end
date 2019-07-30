import React from 'react'
import { Segment, Grid, Placeholder } from 'semantic-ui-react'

const ExperienceList = (props) => {
  return (
    <Segment>
      <Grid columns={3} stackable>
          {props.experiences.map(i => {
              return (
                <Grid.Column>
                  <Segment raised>
                    {i.title}
                    {i.state}
                  </Segment>
                </Grid.Column>
              )  
            })}
      </Grid>
    </Segment>
  )
}
export default ExperienceList