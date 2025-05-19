import LoadingData from "../../../../../utilities/loading_data";

function TenantCard ({tenant, isLoading}){
  
  if (isLoading || !tenant || tenant.length === 0 || tenant.message) {
    return (
      <LoadingData
        title="Tenant Info"
        data={tenant}
        isLoading={isLoading}
        col={4}
      />
    );
  }

    return (
        <>
        <div className="card col-4 border-0 shadow p-4">
            <div className="card-header bg-dark text-light">            
                <h5>Tenant Info</h5>
            </div>
            <div className="card-body">
                <p><strong>Name:</strong> {tenant?.name || 'N/A'}</p>
                <p><strong>Email:</strong> {tenant?.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {tenant?.phone || 'N/A'}</p>
            </div>
        </div>
        </>
    )
}

export default TenantCard;