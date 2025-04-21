import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyInfo from './componenets/property_info_card';
import PropertyOwnerInfo from './componenets/prop_owner_card';
import ApiCall from '../../../../utilities/api-call';
import TenantInfo from './componenets/tenate_info_card';
import MaintenanceCard from './componenets/maintenance_card';


const ShowProperty = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = `property/${id}`;
      try {
        const response = await ApiCall({ method, endpoint, token });
        setResponseData(response);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
        setResponseData({ message: 'Failed to fetch data.' });
      } 
      finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <div className='container mt-5'>
        <div className='row'>
            <PropertyInfo property={responseData} isLoading={isLoading} />
            <PropertyOwnerInfo owner={responseData.owner} isLoading={isLoading}/>
            <TenantInfo data={responseData} isLoading={isLoading}/>
            <MaintenanceCard maintenances={responseData.maintenances} isLoading={isLoading}/>
        </div>
    </div>

  );
};

export default ShowProperty;