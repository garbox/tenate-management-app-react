import React from 'react';
import ContactUs from '../components/cards/contact-us';
import FindRental from '../components/cards/find-rental';
import RequestShowing from '../components/cards/request-showing';

const InfoRow = () => {
    return (
        <div className="row g-4 mt-3"> {/* Bootstrap row with gutter spacing */}
          <div className="col-md-4">
            <ContactUs />
          </div>
          <div className="col-md-4">
            <RequestShowing />
          </div>
          <div className="col-md-4">
            <FindRental />
          </div>
        </div>
      );
};

export default InfoRow;