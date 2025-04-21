import LoadingData from "../../../../../utilities/loading_data";

function TenateCard ({tenate, isLoading}){

  if (isLoading || !tenate || tenate.length === 0 || tenate.message) {
    return (
      <LoadingData
        title="Tenate Info"
        data={tenate}
        isLoading={isLoading}
        col={4}
      />
    );
  }

    return (
        <>
        <div className="card col-4 border-0">
            <div className="card-header bg-dark text-light">            
                <h5>Tenate Info</h5>
            </div>
            <div className="card-body">
                <p><strong>Name:</strong> {tenate.name || 'N/A'}</p>
                <p><strong>Email:</strong> {tenate.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {tenate.phone || 'N/A'}</p>
            </div>
        </div>
        </>
    )
}

export default TenateCard;