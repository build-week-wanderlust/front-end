import React from 'react'
import { Segment, Grid, Item, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ExperienceList = (props) => {
  return (
    <Segment>
      <Grid columns={3} stackable>
          {props.experiences.map(i => {
              return (
                <Grid.Column>
                  <Link to={`/experiences/${i.experienceid}`} style={{ textDecoration: 'none', color:'black' }}>
                    <Segment raised color="teal">
                      <Item>
                        <Item.Content>
                          <Item.Header>
                          <Header as="h4">
                            {i.title}

                          </Header>
                          </Item.Header>
                          <Item.Meta>
                            <span className='price'>${i.price}</span>
                          </Item.Meta>
                          <Item.Description>
                            {i.city}, {i.state}
                          </Item.Description>
                        </Item.Content>
                      </Item>
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