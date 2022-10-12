import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,  Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import StarRating  from '../Components/Rating'
import { useDispatch, useSelector } from 'react-redux';
import { GetSong } from '../Redux/songs/songAction';


const Songs = () => {
  const [rating,setRating]=useState(0);
  const dispatch = useDispatch();
  const songs = useSelector(store => store.Song.songs);


  const navigate=useNavigate();
  const AddSong=()=>{
     navigate("/addsong")
  }


  const handleChange = (value) => {
    setRating(value);
  }

//  console.log(songs,"song");


 useEffect(()=>{
   dispatch(GetSong());
 },[]);

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

      
        {
          songs?.songs.map((e)=>(
              <tr key={e._id}>
              <td> <img src={e.cover} /> </td>
              <td>{e.name}</td>
              <td>{e.createdAt}</td>
              <td>{e?.artistId?.map((e)=>( <span>{e.name}</span>  ))}</td>
              <td>      <StarRating style={ {cursor:"pointer"}}
             count={5}
             size={40}
             value={rating}
             activeColor ={'yellow'}
             inactiveColor={'#7e7e7e'}
             onChange={handleChange}  />  </td>
              
              </tr>         
          ))
        }
    
    </tbody>
  </Table>
  </Container>
  )
}

export default Songs