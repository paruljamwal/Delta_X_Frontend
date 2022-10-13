import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/User/userAction";


const Register = () => {

  const [err,setError]=useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerData,setRegisterdata]=useState({
    name:"",
    email:"",
    password:""

  });
  
  const registerValidations=(val)=>{
   
    const err={};

    if(!val.email){
      err.email="email is required";
    }
    if(!val.name){
      err.name="name is required";
    }
    if(!val.password){
      err.password="password is required";
    }
    return err;
  };

  
  const handelRegister=(e)=>{
    const {name,value}=e.target;
    setRegisterdata({...registerData,[name]:value});
    setError(registerValidations(registerData));
  }
  

  const registerValidData=()=>{
    setError(registerValidations(registerData));
      if(registerData.name && registerData.password && registerData.email ){
        dispatch(RegisterUser(registerData));
        navigate("/login");
      }  
  }

  // console.log(registerData);
// console.log(err,"ere")
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
      <p>{registerData.name ? "" : err?.name }</p>


    

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name="email" onChange={handelRegister} type="email" placeholder="Enter Email Address" />
      </FloatingLabel>
      <p>{registerData.email ? "" : err?.email }</p>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelRegister} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      <p style={{color:"red", fontSize:"smaller", maginTop:"-10px"}} >{registerData.password ? "" : err?.password }</p>

      
  
      <Button variant="success" onClick={registerValidData} >
        Register
      </Button>

      <p>If you already have an account <Link to="/login" >Login</Link> </p>

    </Form>
    </Container>
  )
}

export default Register;