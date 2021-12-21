import Input from "../components/Input";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function Login(){
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();

  function handleClick(){
    const user = { email }
    localStorage.setItem("email", JSON.stringify(user));
    navigate("/lista");
  }

  const isValidEmail = email.match(/\S+@\S+\.\S+/);
  const minLength = 6;
  return(
  <div>
    <Input 
      label="Email"
      type="email" 
      id="email"
      onChange={ ({target})=> setEmail(target.value)}
      value={email}
    />
    <Input 
      label="Password"
      type="password"
      onChange={ ({target})=> setpassword(target.value)}
      value={ password }
      id="password"
    />
    <button 
      type="button" 
      onClick={ handleClick }
      disabled={!(password.length > minLength && isValidEmail)}
    >
      Entrar
    </button>
  </div>)
}

export default Login;