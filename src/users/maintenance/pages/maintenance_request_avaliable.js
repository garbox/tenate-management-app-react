import React, { useEffect, useState } from "react";
import AvalibaleMaintenanceTable from "./components/avaliable_maintenance_table";
import ApiCall from "../../../utilities/api-call";

function MaintenanceRequestAvaliable() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;
  const field = 'assigned_to';

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = `/maintenance/search?field=${field}`;
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading}))
    };
  
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
      <AvalibaleMaintenanceTable
        data={responseData}
        isLoading={isLoading}
        user={user}
        setResponseData={setResponseData}
      />
      </div>
    </div>
  );
}

export default MaintenanceRequestAvaliable;
