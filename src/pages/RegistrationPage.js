import { useRef } from "react";
import Layout from "../Layout/Layout";

const RegistrationPage = () => {
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

    console.log('add user log', addedUser);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addedUser)
  };
  fetch('https://reqres.in/api/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log('Data print',data));

  }
 

  return (
   <Layout>
    <form onSubmit={submitHandler}>
      <label>Email</label>
      <input type="email" ref={emailInputRef}></input>
      <label>Password</label>
      <input type="password" ref={passwordInputRef}></input>
      <button type="submit">Sign Up</button>
    </form>
    </Layout>
  );
};

export default RegistrationPage;
