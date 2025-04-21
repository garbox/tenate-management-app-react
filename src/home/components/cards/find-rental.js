import React from 'react';

const FindRental = () => {
    return (
      <div className="card h-100"> {/* Ensures all cards have equal height */}
      <div className="card-header bg-grey" style={{ height: '150px' }}> {/* Set header height */}
      </div>
      <div className="card-body">
        <h5 className="card-title">Find a rental.</h5>
        <p className="card-text">This is a simple card example.</p>
        <a href="#" className="btn btn-primary">Find rental</a>
      </div>
    </div>
      );
};

export default FindRental;