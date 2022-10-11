import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate=useNavigate();

  const [registerData,setRegisterdata]=useState({
    name:"",
    email:"",
    password:""

  });
  
  const registerValidations=(val)=>{
   
    const err={};

    if(!val.email){
      err.DOB="email is required";
    }
    if(!val.password){
      err.Bio="password is required";
    }
    return err;
  };

  
  const handelRegister=(e)=>{
    const {name,value}=e.target;
    setRegisterdata({...registerData,[name]:value});
  }
  

  const registerValidData=()=>{
    navigate("/login")
  }

  // console.log(registerData);

  return (
    <Container style={{width:"50%"}} >
    <Form>

    <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
      >
        <Form.Control name="name" onChange={handelRegister} type="name" placeholder="Enter your name" />
      </FloatingLabel>

    

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name="email" onChange={handelRegister} type="email" placeholder="Enter Email Address" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelRegister} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      
  
      <Button variant="success" type="submit" onClick={registerValidData} >
        Register
      </Button>

    </Form>
    </Container>
  )
}

export default Register;