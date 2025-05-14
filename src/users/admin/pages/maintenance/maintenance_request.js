import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiCall from '../../../../utilities/api-call';
import MaintenanceRequestExspenses from './components/maintenance_request_exspenses';
import MaintenanceRequestCard from './components/maintenance_request_card';

function MaintenanceRequest() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState('true');
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;
  const { id } = useParams(); // Extract the ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = `maintenance/request/${id}`;
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }));
    };

    fetchData();
  }, []); 

  return (
    <div className='container mt-5'>
      <div className='row'>
        <MaintenanceRequestExspenses request={responseData} type={responseData.type} isLoading={isLoading} />
        <MaintenanceRequestCard request={responseData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default MaintenanceRequest;