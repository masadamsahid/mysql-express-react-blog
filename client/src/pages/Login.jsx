import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button type="submit">Login</button>
        <p>This is an error!</p>
        <span>
          You don't have an account, yet? <Link to='/register'>Register, now!</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;