import { Segment, Header, Form, Button, Grid, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const AddUserForm = (props) => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const token = window.localStorage.getItem('token')

  console.log('state',input)

  const handleChange = e => {
    console.log('New user input form state',e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('https://brudnak-wanderlust.herokuapp.com/createnewuser', input)
    .then(res => {
      console.log(res)
      axios
    .post('https://brudnak-wanderlust.herokuapp.com/login', `grant_type=password&username=${input.username}&password=${input.password}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      console.log(res)
      window.localStorage.setItem('token', JSON.stringify(res.data.access_token))
      props.history.push('/experiences')
    })
    .catch(err => {
      console.error(err)
    })
      // e.target.reset();
    })
  }

  if(token){
    return <Redirect to="/experiences"/>
  }
  return (
    <Segment>
      <Header dividing as="h3">Sign Up</Header>
      <Grid textAlign='center' style={{ height: '45vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' textAlign='center'>
         Create New User
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='Enter a Username' 
            onChange={handleChange}
            name="username"
            value={input.username}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Enter a Password'
            type='password'
            onChange={handleChange}
            name="password"
            value={input.password}
          />

          <Button color='teal' fluid size='large' onClick={handleSubmit}>
            Sign Up!
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    </Segment>
  )
}
 export default AddUserForm