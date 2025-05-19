import LoadingData from "../../../../../utilities/loading_data";

function CreatePropertyForm({ state, responseData, owner, isLoading, handleSubmit }) {
    console.log(responseData);

    if (isLoading || !owner || owner.length === 0 || owner.message) {
        return (
            <LoadingData
                title="Create Property"
                data={owner}
                isLoading={isLoading}
                col={12}
            />
        );
    }

    if (isLoading || !state || state.length === 0 || state.message) {
        return (
            <LoadingData
                title="Create Property"
                data={state}
                isLoading={isLoading}
                col={12}
            />
        );
    }

    return (
        <>
            <div className="card col-12 shadow border-0 p-4">
                <div className="card-header bg-dark text-white">
                    <h5>Create Property</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="unit" className="form-label">Unit</label>
                            <input type="text" className="form-control" id="unit" name="unit" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="state_id" className="form-label">State</label>
                            <select className="form-select" id="state_id" name="state_id">
                                <option value="">Select a state</option>
                                {state?.map((state) => (
                                    <option key={state.id} value={state.id}>{state.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="zip" className="form-label">Zip Code</label>
                            <input type="text" className="form-control" id="zip" name="zip" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="owner_id" className="form-label">Owner</label>
                            <select className="form-select" id="owner_id" name="owner_id">
                                <option value="">Select an owner</option>
                                {owner.map(({ id, name }) => (
                                    <option key={id} value={id}>{name}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Save Property</button>
                    </form>
                    {responseData && (
                        responseData.message ? (
                            <div className="mt-3 alert alert-danger">
                                {responseData.message}
                            </div>
                        ) : (
                            <div className="mt-3 alert alert-success">
                                Property created successfully!
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default CreatePropertyForm;
