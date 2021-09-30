import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { decode, encode } from 'base-64';

function Login() {
  const [formState, setFormState] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    let header = `Basic ${encode(
      `${formState.username}:${formState.password}`
    )}`;
    console.log(header);
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
    } catch (err) {
      console.log(err);
    }
  }

  function handleForm(e) {
    e.preventDefault();
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
