import React, { useEffect, useState } from "react";
import YourJobsTable from "./components/your_jobs_table";
import ApiCall from "../../../utilities/api-call";

function YourJobs() {
  const [responseData, setResponseData] = useState('');
  const [statusData, setStatusData] = useState('');
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [isLoading, setIsLoading] = useState(true);
  const token = user.token;
  const field = 'assigned_to';
  const value = user.id;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = `/maintenance/search?field=${field}&value=${value}`;
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading}))
    };

    const fetchStatusData = async () => {
        const method = 'GET';
        const endpoint = `/maintenance/status`;
        setStatusData(await ApiCall({ method, endpoint, token, setIsLoading}))
      };
  
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
      <YourJobsTable
        data={responseData}
        isLoading={isLoading}
      />
      </div>
    </div>
  );
}

export default YourJobs;
