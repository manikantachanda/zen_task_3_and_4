import React, { useState } from 'react';
import Logo from "./logo.png";
import { useNavigate } from 'react-router-dom';
const Form=()=>{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const validateLogin = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert('Please enter a valid email address');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^@A-Za-z\d]).*$/;
    // if (!passwordRegex.test(password)) {
    //   alert('Password must contain an uppercase letter, a number, and only allow @ as a special character');
    //   return;
    // }
    if (password === 'SmartServTest@123') {
        navigate('/Dashboard');
      } else {
        alert('Invalid username or password');
      }

    // If validation passes, you can proceed with further actions (e.g., submit form or navigate to another page)
    // alert('Login successful!');
  };
  const sendResetEmail = () => {
    // Logic to open email client for sending reset email to support@smartserv.io
    window.location.href = 'mailto:support@smartserv.io';
  };
    return (
        <div className="form_box">
        <img src={Logo} alt="Logo" />
    <form id="loginForm">
        <input type="text" id="username" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" id="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button type="button" onClick={validateLogin}>Login</button><br /><br /><br />
        <a href="#" onClick={sendResetEmail}>Forget your password?</a>

    </form>
    </div>
    )
}
export default Form;