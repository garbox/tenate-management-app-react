// single function for API calls. 
const ApiCalls = async ({method, endpoint, token=null, payload = null, setIsLoading = null}) => {

    const apiUrl = process.env.REACT_APP_API_URL;
    
    const url = `${apiUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    
    if (payload !== null) {
      options.body = JSON.stringify(payload);
    }
    
    try {
      const response = await fetch(url, options);
  
      // Check if the response is not OK
      if (!response.ok) {
        const errorData = await response.json(); // Parse error response as JSON
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } 
    catch (error) {
      // Return a consistent JSON structure for errors
      return { message: error.message };
    } 
    finally {      
      if (typeof setIsLoading === 'function') {
        setIsLoading(false);
      }
    }
  };
  
  export default ApiCalls;