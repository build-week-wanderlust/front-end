import React, { useState, useEffect } from 'react'
import { Segment, Header, Container } from 'semantic-ui-react'
import axios from 'axios'

const ExperienceDetail = props => {
  const [info, setInfo] = useState()
  useEffect( () => {
    axios
    .get(`https://brudnak-wanderlust.herokuapp.com/experiences/experiences/${props.match.params.id}`)
    .then(res => {
      console.log('experience results', res.data)
      setInfo(res.data)
    })
  }, [])
  console.log(props.match.params)
  
  return (
    <Segment>
      <Header dividing as="h3">Trip Details</Header>
      <Container text>
      {!info ? <Segment loading padded='very'></Segment> : <Segment>
        <Header dividing as='h3'>{info.title}</Header>
        {info.description}
      </Segment>}
      
      </Container>
    </Segment>
  )
}

export default ExperienceDetail;