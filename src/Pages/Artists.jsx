import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Artists = () => {
  return (
    <Container>
    <Table striped>
    <thead>
      <tr>
        <th>Artists</th>
        <th>Date Of Birth</th>
        <th>Songs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  </Container>
  )
}

export default Artists