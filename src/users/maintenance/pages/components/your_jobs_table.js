import { Link } from "react-router-dom";
import LoadingData from "../../../../utilities/loading_data";

function YourJobsTable({ data, isLoading}) {
console.log(data);

  // Let LoadingData handle the loading, error, or no data state
  if (isLoading || !data || data.length === 0) {
    return (
      <LoadingData
        title="Your Assigned Jobs"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  // If data is available and valid, render the table
  return (
    <div className="card col-12 border-0 shadow p-4">
      <div className="card-header bg-dark text-white">
        <h5>Your Assigned Jobs</h5>
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
                <th>User Type</th>
                <th>Property Address</th>
                <th colSpan={2}>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((maintenance) => (
                <tr key={maintenance.id}>
                  <td>{maintenance.id|| 'N/A'}</td>
                  <td>{maintenance?.type?.type || 'N/A'}</td>
                  <td>{maintenance?.description || 'N/A'}</td>
                  <td>{maintenance?.user?.name || 'N/A'}</td>
                  <td>{maintenance?.user?.role?.name || 'N/A'}</td>
                  <td>{maintenance?.property?.address  || 'N/A'}</td>
                  <td>{maintenance?.status?.name || 'N/A'}</td>
                  <td><Link to={`/maintience/job/${maintenance.id}`} className="btn btn-sm btn-primary">
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
}

export default YourJobsTable;
