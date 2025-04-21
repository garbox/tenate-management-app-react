import React from 'react';

const RequestShowing = () => {
    return (
      <div className="card h-100"> {/* Ensures all cards have equal height */}
      <div className="card-header bg-grey" style={{ height: '150px' }}> {/* Set header height */}
      </div>
      <div className="card-body">
        <h5 className="card-title">Request showing</h5>
        <p className="card-text">This is a simple card example.</p>
        <a href="#" className="btn btn-primary">Request Showing</a>
      </div>
    </div>
      );
};

export default RequestShowing;