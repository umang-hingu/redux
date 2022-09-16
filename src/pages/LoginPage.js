import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const addedUser = {
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log("add user log", addedUser);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedUser),
    };
    fetch("https://reqres.in/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
      if(data.token){
        navigate('/homepage');
      }
      });
    
    
      
  };

  return (
    <Layout>
    <form onSubmit={submitHandler}>
      <label>Email</label>
      <input type="email" ref={emailInputRef}></input>
      <label>Password</label>
      <input type="password" ref={passwordInputRef}></input>
      <button type="submit">Sign In</button>
    </form>
    </Layout>
  );
};

export default LoginPage;
