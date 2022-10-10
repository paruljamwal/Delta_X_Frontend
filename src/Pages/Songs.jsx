import React from 'react'
import Table from 'react-bootstrap/Table';

const Songs = () => {
  return (
    <Table striped>
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
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Songs