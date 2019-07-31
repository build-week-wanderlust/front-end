import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ExperienceList = (props) => {
  return (
    <Segment>
      <Grid columns={3} stackable>
          {props.experiences.map(i => {
              return (
                <Grid.Column>
                  <Link to={`/experiences/${i.experienceid}`}>
                    <Segment raised color="teal">
                      <p>{i.title}</p>
                      <p>{i.state}</p>
                    </Segment>
                  </Link>
                </Grid.Column>
              )  
            })}
      </Grid>
    </Segment>
  )
}
export default ExperienceList