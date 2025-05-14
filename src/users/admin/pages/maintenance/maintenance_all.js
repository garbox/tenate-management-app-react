import React, { useState, useEffect } from 'react';
import ApiCall from '../../../../utilities/api-call';
import MaintenanceCardAll from './components/maintenance_all_card';

function MaintenanceAll() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = '/maintenance/request';
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }));
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <MaintenanceCardAll data={responseData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default MaintenanceAll;