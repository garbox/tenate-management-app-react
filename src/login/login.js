import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoginForm from './componenets/login-form';
import ApiCall from '../utilities/api-call';

function LoginPage ({onUserChange}) {
  const [responseData, setResponseData] = useState(''); // Correctly destructure state and setter
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get input field values
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Define the method, URL, and data
    const method = 'POST';
    const endpoint = '/login';
    const payload = { email, password };

    // Call the Ajax function and update the state with the response
    const response = await ApiCall({method, endpoint, payload});
    if (response.message) {
      setResponseData(response.message);
    } 
    else {
      onUserChange(response); // Update user state in parent component
      navigate('/profile');
    }
  };

  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} responseData={responseData} />
    </div>
  );
};

export default LoginPage;