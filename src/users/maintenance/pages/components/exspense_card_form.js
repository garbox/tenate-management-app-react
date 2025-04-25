import { useState } from "react";
import ApiCall from "../../../../utilities/api-call";
import LoadingData from "../../../../utilities/loading_data";



function ExpensesCardForm ({maintId, user, onSubmit}){
    
    const [responseData, setResponseData] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Get input field values
        const expense = e.target.expense.value * 100;
        const note = e.target.note.value;
        const user_id = user.id;
        const maintenance_id = maintId;
    
        // Define the method, URL, and data
        const method = 'POST';
        const endpoint = 'maintenance/exspense';
        const payload = { expense, note, user_id, maintenance_id};
    
        // Call the Ajax function and update the state with the response
        setResponseData(await ApiCall({method, endpoint, payload}));
        onSubmit();        
      };

    return (
        <div className="card col-6 border-0">
        <div className="card-header bg-dark text-white"><h5>Add Expenses</h5></div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="expense" className="form-label">Expense</label>
                <input
                    type="text"
                    className="form-control"
                    id="expense"
                    name="expense"
                    placeholder="Enter expense"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="note" className="form-label">Note</label>
                <input
                    type="text"
                    className="form-control"
                    id="note"
                    name="note"
                    placeholder="Enter note"
                />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            {responseData.message && (
            <div className="mt-3 alert alert-danger">
              {responseData.message}
            </div>
          )}
        </div>
    </div>
    )

}

export default ExpensesCardForm