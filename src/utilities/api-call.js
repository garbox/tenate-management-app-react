import axios from 'axios';

const ApiCalls = async ({ method, endpoint, token = null, payload = null, setIsLoading = null }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;

  const config = {
    method: method.toLowerCase(),
    url: url,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    },
    ...(payload && { data: payload })
  };

  try {
    const response = await axios(config);
    return response.data;
  } 
  catch (error) {
    return {
      message: error.response?.data?.message || error.message || 'Unknown error'
    };
  } 
  finally {
    if (typeof setIsLoading === 'function') {
      setIsLoading(false);
    }
  }
};

export default ApiCalls;
