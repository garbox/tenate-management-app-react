import { Link } from 'react-router-dom';
import LoadingData from '../../../../../utilities/loading_data';

function MaintenanceCardAll({data, isLoading}) {
  
  if (isLoading || !data || data.length === 0 || data.message) {
    return (
      <LoadingData
        title="All Maintenance Request"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }

    return (
        <div className="card col-12 border-0 shadow p-4">
          <div className="card-header bg-dark text-white">
            <h5>All Maintenance Request</h5>
          </div>
          <div className="card-body bg-light">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table">
                  <tr>
                    <th>Ticket #</th>
                    <th>Type</th>
                    <th>Type Description</th>
                    <th>Maintenance Description</th>
                    <th>Placed By</th>
                    <th>Property Address</th>
                    <th colSpan={2}>Status</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((maintenance, index) => (
                    <tr key={index}>
                    <td>{maintenance.id || 'N/A'}</td>
                    <td>{maintenance?.type?.type || 'N/A'}</td>
                    <td>{maintenance?.type?.description || 'N/A'}</td>
                    <td>{maintenance?.description || 'N/A'}</td>
                    <td>{maintenance?.user?.name || 'N/A'}</td>
                    <td>{maintenance?.property?.address || 'N/A'}</td>
                    <td>{maintenance?.status?.name || 'N/A'}</td>
                    <td>
                      <Link to={`/admin/property/${maintenance?.property?.id}`}
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
}

export default MaintenanceCardAll;