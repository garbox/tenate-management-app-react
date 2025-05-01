import LoadingData from "../../../../utilities/loading_data";

function CurrentMaintenenaceRequest ({responseData, isLoading}){
   
    if (isLoading || !responseData || responseData.length === 0 || responseData.message) {
        return (
          <LoadingData
            title="Current Requests"
            data={responseData}
            isLoading={isLoading}
            col={6}
          />
        );
      }
    


    return (
        <div className="card col-6 border-0 shadow p-4">
            <div className="card-header bg-dark text-white">
                <h5>Current Requests</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Type</th>
                                <th>Note</th>
                                <th className="col-2">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {responseData.map(data => 
                                <tr key={data.id} value={data.id}>
                                    <td>{data.type.type}</td>
                                    <td>{data.description}</td>
                                    <td>{data.status.name}</td>
                                    <td><button className="btn btn-sm btn-outline-danger">Remove</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>  
        </div>
    );
}
export default CurrentMaintenenaceRequest