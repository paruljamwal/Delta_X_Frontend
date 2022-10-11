
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate();

  const [loginData,setLogindata]=useState({
    email:"",
    password:""

  });
  
  const LoginValidations=(val)=>{
   
    const err={};

    if(!val.email){
      err.DOB="email is required";
    }
    if(!val.password){
      err.Bio="password is required";
    }
    return err;
  };

  
  const handelLogin=(e)=>{
    const {name,value}=e.target;
    setLogindata({...loginData,[name]:value});
  }
  

  const loginValidData=()=>{
    navigate("/")
  }

  return (
    <Container style={{width:"50%"}} >
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name="email" onChange={handelLogin} type="email" placeholder="Enter Email Address" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelLogin} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      
  
      <Button variant="success" type="submit" onClick={loginValidData} >
        Login
      </Button>

    </Form>
    </Container>
  )
}

export default Login;