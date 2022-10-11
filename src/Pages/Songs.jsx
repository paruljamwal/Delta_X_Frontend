import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Songs = () => {
  return (
    <Container>
    <Table striped >
    <thead>
      <tr>
        <th>ArtWork</th>
        <th>Song</th>
        <th>Date of Release</th>
        <th>Artists</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>Thornton</td>
        <td>2</td>
        
      </tr>
    </tbody>
  </Table>
  </Container>
  )
}

export default Songs