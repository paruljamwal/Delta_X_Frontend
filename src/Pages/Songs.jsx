import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,  Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import Rating from '../Components/Rating'


const Songs = () => {
  const navigate=useNavigate();
  const AddSong=()=>{
     navigate("/addsong")
  }
  return (
    <Container>
  
   <Container style={{width:"20%", margin:"4% 0% 0% 90%"}} >
  <Button onClick={AddSong} variant={'success'} > <BsMusicNoteBeamed/> Add Song</Button>
   </Container>
   

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
        <td> <Rating/>  </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td><Rating/></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>Thornton</td>
        <td><Rating/></td>
        
      </tr>
    </tbody>
  </Table>
  </Container>
  )
}

export default Songs