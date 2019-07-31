import React, { useState, useEffect } from 'react'
import { Segment, Header } from 'semantic-ui-react'
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
  if(!info){
    return <Segment loading padded='very'></Segment>
  }
  return (
    <Segment>
      <Header dividing as="h3">{info.title}</Header>
      <p>{info.description}</p>
    </Segment>
  )
}

export default ExperienceDetail;