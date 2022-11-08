import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  
  const handleChangeInputs = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post('/auth/register', inputs)
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  }
  
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder='username' name='username' onChange={handleChangeInputs}/>
        <input required type="text" placeholder='email' name='email' onChange={handleChangeInputs}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChangeInputs}/>
        <button type="submit">Register</button>
        {err && <p>{err}</p>}
        <span>
          Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;