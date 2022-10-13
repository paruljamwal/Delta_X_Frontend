import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "../Components/DatePicker";
import { AiOutlinePlus} from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import {FiSave} from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { AddArtist, getArtist } from "../Redux/artist/artistAction";
import {AddSongs} from '../Redux/songs/songAction';
import { userSucces } from "../Redux/User/userAction";
const AddSong = () => {
  const [show, setShow] = useState(false);
  const [artistsId,setArtistId] = useState();
  const [useId,setUserId] = useState();
  
  const dispatch = useDispatch();
  const artists = useSelector(store => store.Artist.artists);
  const songs = useSelector(store=>store.Song.songs);
  const user = useSelector(store=>store.User.isAuth);


  const [artistData,setArtistdata]=useState({
    name:"",
    DOB:"",
    Bio:""

  });

  // add song...
  const [addSong,setAddSong]=useState({
    name:"",
    cover:"",
    userId:"",
    artistId:""
  });

  // artists.filter((e)=>(e.name==))
 

  const handleShow = () => setShow(true);
  
  const artistValidations=(val)=>{
   
    const err={};
    if(!val.name){
      err.name="name is required";
    }
    if(!val.DOB){
      err.DOB="DOB is required";
    }
    if(!val.Bio){
      err.Bio="Bio is required";
    }
    return err;
  };




  // songValidations...

  const songValidations=(val)=>{
    const err={};
    if(!val.name){
      err.name="name is required";
    }
    if(!val.cover){
      err.cover="cover image is required"
    }

    if(!val.userId){
      err.userId="userId is requuired";
    }
    if(!val.artistId){
      err.artistId="artistId is required";
    }
  }
  
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setArtistdata({...artistData,[name]:value});
  }
  
  const handelSongs=(e)=>{
    let {name,value}=e.target;
    setAddSong({...addSong,[name]:value})
  }

  const handleClose = () => {
    // validations()
   dispatch(AddArtist(artistData));
    setShow(false)
  };

  const handelSong=()=>{
    // dispatch(AddSongs(addSong))
    console.log(addSong,"artist");
    // console.log(artistsId,"ai")

    
  }


  
  useEffect(()=>{
    dispatch(getArtist());
    dispatch(userSucces() )
  },[]);


  return (
    <Container style={{width:"50%"}} >
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Song name"
        className="mb-3"
      >
        <Form.Control name="name" onChange={handelSongs} type="text" placeholder="Song Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Date Released">
        <Form.Control  name="date" onChange={handelSongs} type="date" />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>ArtWork</Form.Label>
        <Form.Control  name="cover" onChange={handelSongs} type="text" />
      </Form.Group>
      <Row className="g-2">
      <Col md>
      <FloatingLabel height={"30px"} controlId="floatingSelect" label="Select Artist">
        <Form.Select  name="artist" onChange={handelSongs}  aria-label="Floating label select example">
          { 
           artists && artists?.artists?.map((e)=>(
             
             <option key={e._id} value={e.name}>{e.name}</option>
             
          
            
      
              ))
      
            }
        </Form.Select>
      </FloatingLabel>

      </Col>
      <Col md>

      <Button variant="outline-success" onClick={handleShow}>
      <AiOutlinePlus/> Add Artist
      </Button>
      </Col>


      </Row>



     {/* Add artist */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-3"
              
            >
              <Form.Control name="name" onChange={handelChange} type="text" placeholder="Artist name" />
            </FloatingLabel>

            {/* DatePicker */}
             <DatePicker  handelChange={handelChange}  /> 



            <FloatingLabel
              controlId="floatingTextarea2"
              label="Add Bio here..."
              
              >
              <Form.Control
                as="textarea"
                name="Bio"
                onChange={handelChange} 
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
          <Button variant="success"  onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      <Row style={{margin:"30px 10px 0px 40%"}}>
       <Col>
      <Button variant="outline-success" style={{margin:"10px"}}  type="cancle">
       <GiCancel/> Cancle
      </Button>
      <Button variant="success" onClick={handelSong} >
      <FiSave/>  Save
      </Button>
       
       </Col>

      </Row>
    </Form>
    </Container>
  );
};

export default AddSong;
