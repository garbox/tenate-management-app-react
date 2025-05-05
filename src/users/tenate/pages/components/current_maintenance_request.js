import { useState } from "react";
import ApiCall from "../../../../utilities/api-call";
import LoadingData from "../../../../utilities/loading_data";

function CurrentMaintenenaceRequest ({responseData, isLoading, fetchRequest}){
    const [deleting, setDeleting] = useState(false);

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
    
      const handleDelete = async (request_id) => {
        setDeleting(true);

        try {
            const method = 'DELETE';
            const endpoint = `maintenance/request/${request_id}`;

            await ApiCall({ method, endpoint });
            
            fetchRequest();
            }
            catch (error) {
                console.error('Error deleting maintenance request:', error);
            } 
            finally {
                setDeleting(false);
            }
    };


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
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(data.id)} 
                                            className="btn btn-sm btn-outline-danger"
                                            disabled={deleting}
                                        >
                                            {deleting ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                'Remove'
                                            )}
                                        </button>
                                    </td>                               
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