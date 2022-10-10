import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const AddSong = () => {
  return (
    <Form>
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Song Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Date Released">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>ArtWork</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Select Artists</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
    <Button variant="outline-success">Success</Button>
      <Button variant="primary" type="cancel">
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Save
    </Button>
  </Form>
  )
}

export default AddSong;