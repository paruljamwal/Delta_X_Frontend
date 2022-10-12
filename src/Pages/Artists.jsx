import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getArtist } from '../Redux/artist/artistAction';

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector(store => store.Artist.artists);

  useEffect(() => {
     dispatch(getArtist());

  }, []);

  // console.log(artists,"art");

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
      {

       artists && artists?.artists?.map((e)=>(
      <tr key={e._id}>
        <td>{e.name}</td>
        <td>{e.DOB}</td>
        <td>{e.BIO}</td>
      </tr>

        ))

      }
     
    </tbody>
  </Table>
  </Container>
  )
}

export default Artists