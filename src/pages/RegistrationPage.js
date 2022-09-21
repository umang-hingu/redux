import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../store/homepage-slice";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const registeredUserData = useSelector((state) => state.registeredUserData);

  const submitHandler = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredUserData),
    };
    fetch("https://reqres.in/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch(homepageActions.addRegisterUserData({ ...registeredUserData, token: data.token }));
      });

   
  };
  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value;
    console.log(enteredEmail);
    dispatch(
      homepageActions.addRegisterUserData({
        ...registeredUserData,
        email: enteredEmail,
      })
    );
  };

  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    console.log(enteredPassword);
    dispatch(
      homepageActions.addRegisterUserData({
        ...registeredUserData,
        password: enteredPassword,
      })
    );
  };

  console.log(registeredUserData);

  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" onChange={emailChangeHandler}></input>
        <label>Password</label>
        <input type="password" onChange={passwordChangeHandler}></input>
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};

export default RegistrationPage;
