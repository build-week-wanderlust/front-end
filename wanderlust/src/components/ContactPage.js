import React from 'react'
import { Segment, Header, Placeholder } from 'semantic-ui-react'
import ContactForm from './ContactForm'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Segment>
        <Header dividing as="h3">
          Contact Us
        </Header>
        <Segment>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
        <ContactForm />
      </Segment>
    );
  }
}

export default ContactPage;