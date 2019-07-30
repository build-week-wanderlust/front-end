import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const token = window.localStorage.getItem('token')
  console.log('state',input)
  
  const handleChange = e => {
    console.log(e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
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
  }
  if(token){
    return <Redirect to="/experiences"/>
  }
  return (   
    <Grid textAlign='center' style={{ height: '44vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
        Log-in to Wanderlust
        </Header>
        <Form size='large' onSubmit={handleLoginSubmit}>
          <Segment stacked>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              onChange={handleChange}
              name="username"
              value={input.username}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              value={input.password}
              onChange={handleChange}
              type='password'
            />
            <Button color='teal' fluid size='large' onClick={handleLoginSubmit}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
    )
}

export default LoginForm
