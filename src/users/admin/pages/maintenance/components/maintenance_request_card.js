import LoadingData from "../../../../../utilities/loading_data";

function MaintenanceRequestCard ({request, isLoading}) {

    if (isLoading || !request || request.length === 0 || request.message) {
        return (
          <LoadingData
            title="Property Details"
            data={request}
            isLoading={isLoading}
            col={12}
          />
        );
      }

    return (
        <div className="card col-12 border-0 mt-5 shadow p-4">
            <div className="card-header bg-dark text-white">
                <h5>Property Details</h5>
            </div>
            <div className="card-body bg-light">
                <p><strong>Address: </strong>{request?.property?.address || 'N/A'}</p>
                <p><strong>City: </strong>{request?.property?.address || 'N/A'}</p>
                <p><strong>State: </strong>{request?.property?.state?.name || 'N/A'}</p>
                <p><strong>Zip: </strong>{request?.property?.zip || 'N/A'}</p>
            </div>
        </div>
        );
}

export default MaintenanceRequestCard;