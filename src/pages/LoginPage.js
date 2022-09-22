import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { homepageActions } from '../store/homepage-slice';

const LoginPage = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginUserData = useSelector((state) => state.loginUserData);
  const registeredUserData = useSelector((state) => state.registeredUserData);

  const submitHandler = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginUserData)
    };
    fetch('https://reqres.in/api/login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        dispatch(
          homepageActions.addLoginUserData({
            ...loginUserData,
            token: data.token
          })
        );
        if (data.token === registeredUserData.token) {
          navigate('/homepage');
        } else if (registeredUserData.token === undefined) {
          navigate('/registration');
        }
      });
  };

  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value;
    console.log(enteredEmail);
    dispatch(
      homepageActions.addLoginUserData({
        ...loginUserData,
        email: enteredEmail
      })
    );
  };

  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    console.log(enteredPassword);
    dispatch(
      homepageActions.addLoginUserData({
        ...loginUserData,
        password: enteredPassword
      })
    );
  };

  console.log(loginUserData);

  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" onChange={emailChangeHandler}></input>
        <label>Password</label>
        <input type="password" onChange={passwordChangeHandler}></input>
        <button type="submit">Sign In</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
