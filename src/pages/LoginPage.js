import { useRef, useState } from "react";

const LoginPage = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredEmail(emailInputRef.current.value);
    setEnteredPassword(passwordInputRef.current.value);
    const addedUser = {
      enteredEmail,
      enteredPassword
    }
    props.onLoginUser(addedUser);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Email</label>
      <input type="email" ref={emailInputRef}></input>
      <label>Password</label>
      <input type="password" ref={passwordInputRef}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
