import React from 'react';

const ListWithUs = () => {
    return (
      <div className="card h-100"> {/* Ensures all cards have equal height */}
      <div className="card-header bg-grey" style={{ height: '150px' }}> {/* Set header height */}
      </div>
      <div className="card-body">
        <h5 className="card-title">List with us</h5>
        <p className="card-text">This is a simple card example.</p>
        <a href="#" className="btn btn-primary">Contact us</a>
      </div>
    </div>
      );
};

export default ListWithUs;