import ApiCall from "../../../../utilities/api-call";
import LoadingData from "../../../../utilities/loading_data";

function ShowExpensesCard({expensesData, isLoading, user, onSubmit}) {

    if (isLoading || !expensesData || expensesData.length === 0) {
        return (
          <LoadingData
            title="Current Expenses"
            data={expensesData}
            isLoading={isLoading}
            col={6}
          />
        );
      }
      
    const handelDelete = async (id) => {
    
        const method = 'DELETE';
        const endpoint = `maintenance/exspense/${id}`;
        const token = user.token;
    
        await ApiCall({method, endpoint, token});
        onSubmit();        
    };

    return (
        <div className="card col-6 border-0">
            <div className="card-header bg-dark text-white"><h5>Current Expenses </h5></div>
            <div className="card-body">
                <table className="table table-striped table-bordered">
                    <thead className="table">
                        <tr>
                        <th>Expense</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expensesData.map((expense) =>
                        <tr key={expense.id}>
                            <td>${expense.expense/100}</td>
                            <td>{expense.note}</td>
                            <td><button onClick={() => handelDelete(expense.id)} className="btn btn-sm btn-outline-danger">Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ShowExpensesCard;