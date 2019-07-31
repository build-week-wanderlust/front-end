import React from 'react'
import { Segment, Form } from 'semantic-ui-react';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      messageText: '',
      agreed: false,
    }
  }
  
  handleTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('Text Input', e.target.value)
  }
  // handleChange = (e, { value }) => {
  //   this.setState(
  //     { 
  //       value 
  //     }
  //   )
  //   console.log(value)
  // }
  
  render() {
    console.log('clicked', this.state.clicked)
    return (
      <Segment>

        <Form action="https://formspree.io/wanderlust.lambda@gmail.com" method='POST' onSubmit={(e) => {
          // e.preventDefault();
        }}>
          <Form.Group widths='equal'>
            <Form.Input 
              required 
              onChange={this.handleTextChange} 
              fluid label='First name' 
              placeholder='First name' 
              name='firstName'
            />
            <Form.Input 
              required 
              onChange={this.handleTextChange}
              fluid label='Last name'
              placeholder='Last name' 
              name='lastName'
            />
            <Form.Input 
              required 
              onChange={this.handleTextChange}
              fluid label='Email' 
              placeholder='Email'
              name='email'
           />
          </Form.Group>
          <Form.TextArea 
            label='Message' 
            placeholder='Tell us how we could help you...'
            onChange={this.handleTextChange}
          />
          <Form.Checkbox 
            label='I agree to the Terms and Conditions'
            onClick={() => {
              return this.setState({
                ...this.state,
                clicked: !this.state.clicked
            })}}
          />
          <Form.Button color="teal">Submit</Form.Button>
        </Form>
      </Segment>
    )
  }
}

export default ContactForm