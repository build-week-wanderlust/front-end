import React, { useState, useEffect} from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Segment, Header, Menu, Dropdown, Button } from 'semantic-ui-react'
import ExperienceList from '../components/ExperienceList'
import axios from 'axios'
import '../styles/TripContainer.css'


const TripContainer = () => {
  const [data, setData] = useState()
  const [filter, setFilter] = useState({
    filteredContentLabel: ''
  })
  useEffect(() => {
    axios
    .get('https://brudnak-wanderlust.herokuapp.com/experiences/experiences')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [])

  
  const sortBy = s => {
    axios.get(`https://brudnak-wanderlust.herokuapp.com/experiences/experiences/?sort=${s}`)
    .then(res => {
      console.log(res)
      setData(res.data)
      console.log(s)
      setFilter({
        filteredContentLabel: s
      })
    })
  }

  const token = window.localStorage.getItem('token')

  if(!token){
   return <Redirect to="/"/>
  } 

  return (
    
    <Segment>
      <Header dividing as="h3">
        Experiences
      </Header>
      <div className="filter-menu">
        <Menu vertical>
          <Dropdown item text='Sort by:'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => sortBy('state')}>State</Dropdown.Item>
              <Dropdown.Item onClick={() => sortBy('price')}>Price</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <p>{filter.filteredContentLabel}</p>
      </div>
      {!data ? <Segment loading padded='very'></Segment> : <ExperienceList experiences={data}/>}
      <Link to="/new_experience">
        <Button color='teal' fluid>Add New Experience</Button>
      </Link>
    </Segment>
  )
}

export default TripContainer;