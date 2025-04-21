import React from 'react';
import { Link } from 'react-router-dom';
import LoadingData from '../../../../../utilities/loading_data';

function MaintenanceCard ({maintenances, isLoading}) {

  if (isLoading || !maintenances || maintenances.length === 0) {
    return (
      <LoadingData
        title="Maintenance Details"
        data={maintenances}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  return (
    <div className="card col-12 border-0">
      <div className="card-header bg-dark text-white">
        <h5>Maintenance Details</h5>
      </div>
      <div className="card-body bg-light">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table">
              <tr>
                <th>Type</th>
                <th>Type Description</th>
                <th>Maintenance Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {maintenances.map((maint, index) => (
                <tr key={index}>
                <td>{maint.type.type || 'N/A'}</td>
                <td>{maint.type.description || 'N/A'}</td>
                <td>{maint.description || 'N/A'}</td>
                <td>{maint.status.name || 'N/A'}</td>
                <td>
                <Link to={`/admin/maintenance/request/${maint.id}`} className="btn btn-sm btn-primary">
                  View
                </Link> 
                </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;