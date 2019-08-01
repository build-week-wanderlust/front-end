import React, {useState} from "react"
import { Form, Segment, Header } from "semantic-ui-react"

const AddExperienceForm = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    price: 0,
    city: "",
    state: "",
    triptype: ""
  })

  console.log('Add Experiece form state', input)

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
  return (
    <Segment>
      <Header dividing as="h3">Add New Experience</Header>
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
          <Form.Radio 
            label="Private"
            name="private"
            value={input.triptype}
            // checked={input.triptype === 'private'}
            onChange={handleClickChange}
          />
          <Form.Radio 
            label="Professional"
            name="professional"
            value={input.triptype}
            // checked={input.triptype === 'professional'}
            onChange={handleClickChange}
          />
          <Form.Button color="teal">Submit</Form.Button>
        </Form>
    </Segment>
  )
}

export default AddExperienceForm;