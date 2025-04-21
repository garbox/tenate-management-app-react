import React from 'react';
import LoadingData from '../../../../../utilities/loading_data';

function PropertyInfo ({ property, isLoading }) {

if (isLoading || (property && property.message)) {
  return (
    <LoadingData
      title="Property Details"
      data={property}
      isLoading={isLoading}
      col={4}
    />
  );
}

  return (
    <div className="card col-12 col-lg-4 border-0 ">
    <div className="card-header bg-dark text-white">
      <h5>Property Details</h5>
    </div>
    <div className="card-body bg-light">
      <p><strong>Address:</strong> {property?.address || 'N/A'}</p>
      <p><strong>City:</strong> {property?.city || 'N/A'}</p>
      <p><strong>State:</strong> {property?.state.name || 'N/A'}</p>
      <p><strong>Zip:</strong> {property?.zip || 'N/A'}</p>
    </div>
  </div>
  );
};

export default PropertyInfo;