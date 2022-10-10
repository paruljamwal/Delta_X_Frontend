import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
const AddSong = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="outline-success" onClick={handleShow}>
        Add Artist
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Artist</Modal.Title>
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

            <div
              id="date-picker-example"
              className="md-form md-outline input-with-post-icon datepicker"
              inline="true"
            >
              <input
                placeholder="Select date"
                type="text"
                id="example"
                className="form-control"
              />
              <i class="fas fa-calendar input-prefix"></i>
            </div>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Add Bio here..."
            >
              <Form.Control
                as="textarea"
                placeholder="Enter Bio here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-success" type="cancle">
        Cancle
      </Button>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default AddSong;
