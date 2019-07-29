import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      messageText: '',

    }
  }

  handleTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('Text Input', e.target.value)
  }
  handleChange = (e, { value }) => {
    this.setState(
      { 
        value 
      }
    )
    console.log(value)
  }

  render() {
    const { value } = this.state
    return (
      <Segment>

        <Form>
          <Form.Group widths='equal'>
            <Form.Input 
              required 
              onChange={this.handleTextChange} 
              fluid label='First name' 
              placeholder='First name' 
            />
            <Form.Input 
              required 
              onChange={this.handleTextChange}
              fluid label='Last name'
              placeholder='Last name' 
            />
            <Form.Input 
              required 
              onChange={this.handleTextChange}
              fluid label='Email' 
              placeholder='Email'
           />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea 
            label='Message' 
            placeholder='Tell us how we could help you...'
            onChange={this.handleTextChange}
          />
          <Form.Checkbox 
            label='I agree to the Terms and Conditions'
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    )
  }
}

export default ContactForm