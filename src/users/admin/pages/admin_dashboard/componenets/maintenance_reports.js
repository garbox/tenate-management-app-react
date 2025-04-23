import React, { useEffect, useState } from 'react';
import ApiCall from '../../../../../utilities/api-call';
import LoadingData from '../../../../../utilities/loading_data';

function MaintenanceReport() {
  const [responseData, setResponseData] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState([]); // Initialize as an empty array
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = '/maintenance/report/status';
      setResponseData(await ApiCall({method, endpoint, token, setIsLoading}));
    };

    fetchData();
  }, []); 

    // Let LoadingData handle the loading, error, or no data state
    if (isLoading || (responseData && responseData.message) || !Array.isArray(responseData) || responseData.length === 0) {
      return (
        <LoadingData
          title="Maintenance Reports"
          data={responseData}
          isLoading={isLoading}
          col={4}
        />
      );
    }

  return (
    <div className="card col-4 border-0">
      <div className="card-header bg-dark text-white">
        <h5>Maintenance Reports</h5>
      </div>
      <div className="card-body bg-light">
        {responseData.map((row) => (
            <p>
              <strong>{row.status.name}:</strong> {row.count} 
            </p>
          ))
        };
      </div>
    </div>
  );
}
export default MaintenanceReport;