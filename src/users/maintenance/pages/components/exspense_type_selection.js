import LoadingData from "../../../../utilities/loading_data";

function ExpenseTypeSelection ({type}) {
    return (
        <>
            <label htmlFor="email" className="form-label">Type</label>
            <select className="form-control">
                {type.map((type) =>
                    <option value={type.id} key={type.id}>{type.type}</option>
                )}
            </select>
        </>
    );
}

export default ExpenseTypeSelection