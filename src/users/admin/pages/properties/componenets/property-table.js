import { Link } from 'react-router-dom';
import LoadingData from '../../../../../utilities/loading_data';

function PropertyTable({ data, isLoading }) {
 console.log(data);
 
  // Let LoadingData handle the loading, error, or no data state
  if (isLoading || (data && data.message) || !Array.isArray(data) || data.length === 0) {
    return (
      <LoadingData
        title="All Properties"
        data={data}
        isLoading={isLoading}
      />
    );
  }

  // Safely access nested properties (e.g., 'owner.name')
  const getNestedValue = (obj, key) =>
    key.split('.').reduce((acc, part) => acc && acc[part], obj);

  // Define table headers and mapping keys
  const headers = [
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state.name' },
    { label: 'Zip', key: 'zip' },
    { label: 'Owner', key: 'owner.name' },
  ];

  return (
    <>
      <div className="card shadow p-4">
        <div className="card-header bg-dark text-white d-flex justify-content-between">
          <h5>All Properties</h5>
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Property"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  {headers.map(({ label }, i) => (
                    <th key={i}>{label}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((property, i) => (
                  <tr key={i}>
                    {headers.map(({ key }, j) => (
                      <td key={j}>{getNestedValue(property, key) || 'N/A'}</td>
                    ))}
                    <td className="text-end">
                      <Link to={`/admin/property/${property.id}`} className="btn btn-sm btn-primary">
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
    </>
  );
}

export default PropertyTable;
