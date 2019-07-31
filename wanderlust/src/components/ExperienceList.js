import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'

const ExperienceList = (props) => {
  return (
    <Segment>
      <Grid columns={3} stackable>
          {props.experiences.map(i => {
              return (
                <Grid.Column>
                  <Segment raised color="teal">
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