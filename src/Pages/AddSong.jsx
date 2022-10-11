import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "../Components/DatePicker";


const AddSong = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container style={{width:"50%"}} >
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
      <Row className="g-2">
      <Col md>
      <FloatingLabel height={"30px"} controlId="floatingSelect" label="Select Artist">
        <Form.Select  aria-label="Floating label select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>

      </Col>
      <Col md>

      <Button variant="outline-success" onClick={handleShow}>
      Add Artist
      </Button>
      </Col>


      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>

            {/* DatePicker */}
             <DatePicker/> 



            <FloatingLabel
              controlId="floatingTextarea2"
              label="Add Bio here..."
            >
              <Form.Control
                as="textarea"
                
                placeholder="Enter Bio here"
                style={{ height: "100px" , marginTop:"20px" }}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      <Row style={{margin:"30px 10px 0px 70%"}}>
       <Col>
      <Button variant="outline-success" style={{margin:"10px"}}  type="cancle">
        Cancle
      </Button>
      <Button variant="success" type="submit">
        Save
      </Button>
       
       </Col>

      </Row>
    </Form>
    </Container>
  );
};

export default AddSong;
