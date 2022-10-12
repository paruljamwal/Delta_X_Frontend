
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/User/userAction";


const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const isAuth = useSelector(store =>store.User.isAuth);

  const [err, setError]=useState();
  const [loginData,setLogindata]=useState({
    email:"",
    password:""

  });
  
  const LoginValidations=(val)=>{
   
    const err={};

    if(!val.email){
      err.email="email is required";
    }
    if(!val.password){
      err.password="password is required";
    }
    return err;
  };

  
  const handelLogin=(e)=>{
    const {name,value}=e.target;
    setLogindata({...loginData,[name]:value});
  }
  

  const loginValidData=()=>{
    setError(LoginValidations(loginData));
    if(loginData.email && loginData.password ){
      dispatch(LoginUser(loginData))
    }
    if(isAuth){
      navigate("/");
      
    }
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
      <p>{loginData.email ? "" : err?.email }</p>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelLogin} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      <p>{loginData.password ? "" : err?.password }</p>
      
  
      <Button variant="success"  onClick={loginValidData} >
        Login
      </Button>

    </Form>
    </Container>
  )
}

export default Login;