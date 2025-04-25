import React from 'react';
import { Link } from 'react-router-dom';
import LoadingData from "../../../../../utilities/loading_data"

function AgreementTable ({ data, isLoading }) {
  if (isLoading || !data || data.length === 0 || data.message) {
    return (
      <LoadingData
        title="All Agreements"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  // Define custom headers and their corresponding keys in the data
  const headers = [
    { label: 'Tenate', key: 'user.name' },
    { label: 'Property', key: 'property.address' },
    { label: 'Deposit', key: 'security_deposit' },
    { label: 'Rent', key: 'rent' }, 
    { label: 'Start Date', key: 'start_date' }, 
    { label: 'End Date', key: 'end_date' }, 
  ];

  // Helper function to safely access nested properties
  const getNestedValue = (obj, key) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className='card shadow p-4'>
      <div className="card-header bg-dark text-white d-flex justify-content-between">
        <h5>All Agreements</h5>
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search Property"
            aria-label="Search"
          />
        </form>
      </div>
      <div className='card-body'>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
          <thead className="table">
            <tr>
            {headers.map((header, index) => (
            <th key={index}>{header.label}</th>
            ))}
            <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{getNestedValue(row, header.key)}</td>
                ))}
                <td className="text-end">
                  <Link
                  to={`/admin/agreements/${row.id}`}
                  className="btn btn-sm btn-primary">
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

export default AgreementTable;