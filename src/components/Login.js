import React, { useState, useContext } from 'react';
import './login.css';
import axios from 'axios';
import { decode, encode } from 'base-64';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../context/auth';

function Login() {
  const authContext = useContext(AuthContext);
  const { setUsername, setToken, setIsLoggedIn } = authContext;
  const [formState, setFormState] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['username', 'token']);

  async function handleSubmit(e) {
    e.preventDefault();
    let header = `Basic ${encode(
      `${formState.username}:${formState.password}`
    )}`;
    try {
      const results = await axios.post(
        'http://localhost:4000/signin',
        JSON.stringify(formState),
        {
          headers: {
            Authorization: header,
          },
        }
      );

      console.log(results);
      setCookie('username', results.data.user.username, { path: '/' });
      setCookie('token', results.data.token, { path: '/' });
      setToken(results.data.token);

      setIsLoggedIn(true);
      setUsername(results.data.user.username);
    } catch (err) {
      console.log(err);
    }
  }

  function handleForm(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={handleForm} name="username" />
        <label>Password</label>
        <input type="text" onChange={handleForm} name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
