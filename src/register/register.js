import { useState } from 'react';
import RegisterForm from './componenets/register-form';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../utilities/api-call';
  
function RegisterPage ({onUserChange}) {

  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    // Define the method, URL, and data
    const method = 'POST';
    const endpoint = '/user/register';
    const payload = {
      name : e.target.name.value,
      password : e.target.password.value,
      email : e.target.email.value,
      email_confirmation : e.target.emailConfirm.value,
      password_confirmation : e.target.passwordConfirm.value
    }

    // Call the Ajax function and update the state with the response
    const response = await ApiCall({method, endpoint, payload, setIsLoading});

    if (response.error) {
      setResponseData(response);
    } 
    else {
      onUserChange(response); // Update user state in parent component
      console.log(response);
      navigate('/profile');
    }
  };

  return (
    <>
      <RegisterForm  handleSubmit={handleSubmit} responseData={responseData} isLoading={isLoading}/>
    </>    
  );
};

export default RegisterPage;