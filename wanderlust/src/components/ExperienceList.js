import React from 'react'
import { Segment, Grid, Placeholder } from 'semantic-ui-react'

const ExperienceList = (props) => {
  return (
    <Segment>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
          {props.experiences.map(i => {
              return (
                <div>
                  {i.title}
                  {i.state}
                </div>
                )
            })}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}
export default ExperienceList