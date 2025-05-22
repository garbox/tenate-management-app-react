import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoginForm from './componenets/login-form';
import ApiCall from '../utilities/api-call';

function LoginPage ({onUserChange}) {
  const [responseData, setResponseData] = useState(''); // Correctly destructure state and setter
  const [isSubmitting , setIsSubmitting ] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const method = 'POST';
    const endpoint = '/login';
    const payload = { email, password };
    
    const response = await ApiCall({method, endpoint, payload});
    
    if (response.error) {
      setResponseData(response);
      setIsSubmitting(false);
    } 
    else {
      onUserChange(response); // Update user state in parent component
      navigate('/profile');
    }
  };

  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} responseData={responseData} isSubmitting={isSubmitting} />
    </div>
  );
};

export default LoginPage;