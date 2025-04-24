import { useState } from "react"; 
import LoadingData from "../../../../utilities/loading_data";
import ApiCall from "../../../../utilities/api-call";


function AvailableMaintenanceTable({ data, isLoading, user, setResponseData }) {
  
  // Let LoadingData handle the loading, error, or no data state
  if (isLoading || !data || data.length === 0) {
    return (
      <LoadingData
        title="Available Maintenance Request"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  const handelAssign = async (user, id) => {
    
    const method = 'PUT';
    const endpoint = `maintenance/request/${id}`;
    const token = user.token;
    const assigned_to = user.id; 
    const payload = {assigned_to};

    const result = await ApiCall({ method, endpoint, payload, token});

    setResponseData(prevData => prevData.filter(item => item.id !== id));
      
};


  // If data is available and valid, render the table
  return (
    <div className="card col-12 border-0">
      <div className="card-header bg-dark text-white">
        <h5>Available Maintenance Request</h5>
      </div>
      <div className="card-body bg-light">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table">
              <tr>
                <th>Ticket #</th>
                <th>Type</th>
                <th>Maintenance Description</th>
                <th>Placed By</th>
                <th>Property Address</th>
                <th colSpan={2}>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((maintenance) => (
                <tr key={maintenance.id}>
                  <td>{maintenance.id || 'N/A'}</td>
                  <td>{maintenance?.type?.type || 'N/A'}</td>
                  <td>{maintenance?.description || 'N/A'}</td>
                  <td>{maintenance?.user?.name || 'N/A'}</td>
                  <td>{maintenance?.property?.address || 'N/A'}</td>
                  <td>{maintenance?.status?.name || 'N/A'}</td>
                  <td className="text-end">
                    <button onClick={() => handelAssign(user, maintenance.id)} className="btn btn-sm btn-primary">Assign</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AvailableMaintenanceTable;
