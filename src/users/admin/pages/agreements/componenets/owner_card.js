import LoadingData from "../../../../../utilities/loading_data";

function OwnerCard ({owner, isLoading}){

    if (isLoading || !owner || owner.length === 0 || owner.message) {
        return (
          <LoadingData
            title="Property Owner Info"
            data={owner}
            isLoading={isLoading}
            col={4}
          />
        );
      }
      
    return (
        <>
        <div className="card col-4 border-0 shadow p-4">
        <div className="card-header bg-dark text-light">
                <h5>Property Owner Info</h5>
            </div>
            <div className="card-body">
                <p><strong>Name:</strong> {owner.name || "N/A"}</p>
                <p><strong>Email:</strong> {owner.email || "N/A"}</p>
                <p><strong>Phone:</strong> {owner.phone || "N/A"}</p>
                <p><strong>DBA:</strong> {owner.dba || "N/A"}</p>
                <p><strong>Address:</strong> {owner.address || "N/A"}</p>
                <p><strong>Zip:</strong> {owner.zip || "N/A"}</p>
                <p><strong>State:</strong> {owner.state.name || "N/A"}</p>

            </div>
        </div>
        </>
    )
}

export default OwnerCard;