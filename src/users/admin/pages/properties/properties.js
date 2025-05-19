import React, { useState, useEffect } from 'react';
import ApiCall from '../../../../utilities/api-call';
import PropertyTable from './componenets/property-table';
import { Link } from 'react-router-dom';

function Properties() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = 'property';
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }));
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <Link to="/admin/property/create  " className='btn btn-outline-primary w-100 mb-3'> Create Property</Link>
      </div>
      <div className='row'>
        <PropertyTable data={responseData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Properties;