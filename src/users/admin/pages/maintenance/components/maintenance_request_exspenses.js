import LoadingData from '../../../../../utilities/loading_data';

function MaintenanceRequestExspenses({ request , type, isLoading}) {
    if (isLoading || !request?.expenses || request.expenses.length === 0 ||  request.message) {
      return (
        <LoadingData
          title="Expenses"
          data={request.expenses}
          isLoading={isLoading}
          col={12}
        />
      );
    }

    return (
      <div className="card col-12 border-0 mt-5">
        <div className="card-header bg-dark text-white">
          <h5>Expenses</h5>
        </div>
        <div className="card-body bg-light">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table">
                <tr>
                  <th>Purchase By</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {request?.expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{request?.assigned_to?.name || 'N/A'}</td>
                    <td>{type?.type || 'N/A'}</td>
                    <td>${expense.expense/100 || 'N/A'}</td>
                    <td>{expense.note || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default MaintenanceRequestExspenses;