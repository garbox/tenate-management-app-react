import React, { useState, useEffect } from 'react';
import ApiCall from '../../../../utilities/api-call';
import PropertyTable from './componenets/property-table';

function Properties() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true); 
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;
 
  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = 'property';
      setResponseData(await ApiCall({method, endpoint, token, setIsLoading}));
    };

    fetchData();
  }, []); 

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className="mt-3">
                <PropertyTable data={responseData} isLoading={isLoading}/>
            </div>
        </div>
    </div>
  );
}

export default Properties;