import React from 'react';
import LoadingData from '../../../../../utilities/loading_data';

function TenantInfo ({ data, isLoading}) {

  if (isLoading || !data.agreements || data.agreements.length === 0) {
    return (
      <LoadingData
        title="Tenant Information"
        data={data.agreements}
        isLoading={isLoading}
        col={4}
      />
    );
  }

  return (
    <div className="card col-12 col-lg-4 border-0 ">
      <div className="card-header bg-dark text-white">
        <h5>Tenant Information</h5>
      </div>
      <div className="card-body bg-light">
        {data.agreements.map((agreement, index) => (
          <div key={index} className="mb-3">
            <p><strong>Name:</strong> {agreement.user?.name || 'N/A'}</p>
            <p><strong>Email:</strong> {agreement.user?.email || 'N/A'}</p>
            <p><strong>Rent:</strong> ${agreement.rent || 'N/A'}</p>
            <p><strong>Security Deposit:</strong> ${agreement.security_deposit || 'N/A'}</p>
            <p><strong>Lease Start Date:</strong> {agreement.start_date || 'N/A'}</p>
            <p><strong>Lease End Date:</strong> {agreement.end_date || 'N/A'}</p>
            <p><strong>Payment Status:</strong> <span className="badge rounded-pill bg-danger">Late</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantInfo;