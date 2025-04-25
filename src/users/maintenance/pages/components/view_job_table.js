import LoadingData from "../../../../utilities/loading_data";
import StatusSelection from "./status_selection";

function ViewJobTable({data, maintStatusData, user, isLoading}){
    
  if (isLoading || !data || data.length === 0) {
    return (
      <LoadingData
        title="Ticket:"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }


    return (
        <>
            <div className="card col-12 border-0 shadow p-4">
                <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Ticket: #{data.id}</h5>
                    </div>
                <div className="card-body bg-light">
                    <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table">
                        <tr>
                            <th>Type</th>
                            <th>Maintenance Description</th>
                            <th>Placed By</th>
                            <th>User Type</th>
                            <th>Property Address</th>
                            <th colSpan={2}>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data?.type?.type || "N/A"}</td>
                                <td>{data?.description || "N/A"}</td>
                                <td>{data?.user?.name || "N/A"}</td>
                                <td>{data?.user?.role?.name || "N/A"}</td>
                                <td>{data?.property?.address || ''}<br />
                                    {data?.property?.city || ''}<br />
                                    {data?.property?.state?.name || 'N/A'}</td>
                                <td>
                                    <StatusSelection data={data} maintStatusData={maintStatusData} isLoading={isLoading} user={user}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
      );
}
export default ViewJobTable