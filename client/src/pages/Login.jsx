import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  
  const {login} = useContext(AuthContext);
  
  const handleChangeInputs = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  }
  
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name="username" onChange={handleChangeInputs}/>
        <input type="password" placeholder='password' name="password" onChange={handleChangeInputs}/>
        <button type="submit" onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          You don't have an account, yet? <Link to='/register'>Register, now!</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;