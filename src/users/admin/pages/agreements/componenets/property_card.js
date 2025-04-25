import LoadingData from "../../../../../utilities/loading_data";

function PropertyCard ({property, isLoading}){
    
    if (isLoading || !property || property.length === 0 || property.message) {
        return (
          <LoadingData
            title="Property Details"
            data={property}
            isLoading={isLoading}
            col={4}
          />
        );
      }

    return (
        <>
        <div className="card col-4 border-0 shadow p-4">
            <div className="card-header bg-dark text-light">            
                <h5>Property Details</h5>
            </div>
            <div className="card-body">
                <p><strong>Adress:</strong> {property.address || 'N/A'}</p>
                <p><strong>City:</strong> {property.city || 'N/A'}</p>
                <p><strong>State:</strong> {property.state.name || 'N/A'}</p>
                <p><strong>Zip:</strong> {property.zip || 'N/A'}</p>
            </div>
        </div>
        </>
    )
}

export default PropertyCard;