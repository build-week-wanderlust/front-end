import React, { useState, useEffect } from 'react'
import { Segment, Header, Container, Card, Label, Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const ExperienceDetail = props => {
  const [info, setInfo] = useState()
  const [edit, setEdit] = useState()
  const [input, setInput] = useState({
    title: "",
    description: "",
    price: 0,
    city: "",
    state: "",
    triptype: ""
  })
  useEffect( () => {
    axios
    .get(`https://brudnak-wanderlust.herokuapp.com/experiences/experiences/${props.match.params.id}`)
    .then(res => {
      console.log('experience results', res.data)
      setInfo(res.data)
    })
  }, [])
  console.log(props.match.params)

  const handleTextChange = e => {
    console.log("New Experience input value", e.target.value)
    setInput({
      [e.target.name]: e.target.value
    })
  }
  const handleClickChange = e => {
    setInput({
      ...input,
      triptype: e.target.value
    })
  }
  
  const handleDelete = e => {
    e.preventDefault();
    axios
    .delete(`https://brudnak-wanderlust.herokuapp.com/experiences/experience/${props.match.params.id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }
  const handleEditClick = e => {
    setEdit(!edit)
  }

  const handleEditSubmit = e => {
    e.preventDefault();

  }

  return (
    <Segment>
      <Header dividing as="h3">Trip Details</Header>
      <Container text>
        {!info 
        ? <Segment loading padded='very'></Segment> 
        : <Card fluid style={{padding: '10px'}} color='teal'>
            <Card.Content header={info.title}></Card.Content>
            <Card.Meta>
              {info.city}, {info.state}
            </Card.Meta>
            <Card.Description>
              {info.description}
            </Card.Description>
            <Card.Content>
              <Label floated="right" tag>${info.price}</Label>
              <p>{info.triptype}</p>
            </Card.Content>
            <Button color="teal">Book Now!</Button>
            {!edit
             ? <Button color="red" onClick={handleEditClick}>Edit Tour</Button>
             :<div></div>
            }

          </Card>
        }
        {!edit
         ? <div></div>
         :<Segment>
            <Header dividing as="h3">Edit Experience</Header>
            <Form>
              <Form.Group widths="equal">
                <Form.Input 
                  required 
                  onChange={handleTextChange} 
                  fluid label="Title" 
                  placeholder="title" 
                  name="title"
                  value={input.title}
                />
                <Form.Input 
                  required 
                  onChange={handleTextChange}
                  fluid label="City"
                  placeholder="city" 
                  name="city"
                  value={input.city}
                />
                <Form.Input 
                  required 
                  onChange={{}}
                  fluid label="State" 
                  placeholder="state"
                  name="state"
                  value={input.state}
              />
                <Form.Input 
                  required 
                  type="number"
                  onChange={{}}
                  fluid label="Price" 
                  placeholder="price"
                  name="price"
                  value={input.price}
              />
              </Form.Group>
              <Form.TextArea 
                required
                label="Description" 
                placeholder="Description..."
                onChange={handleTextChange}
                name="description"
                value={input.description}
              />
              <Form.Checkbox 
                label="Private"
                name="private"
                value={input.triptype}
                onChange={() => setInput({...input, triptype: 'private'})}
              />
              <Form.Checkbox 
                label="Professional"
                name="professional"
                value={input.triptype}
                onChange={() => setInput({...input, triptype: 'professional'})}
              />
              <Form.Button color="teal">Submit</Form.Button>

            </Form>
          <Button style={{ marginTop: '10px'}}negative>Delete</Button>
        </Segment>
        }
      </Container>
    </Segment>
  )
}

export default ExperienceDetail;