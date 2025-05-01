    import { useState } from "react";
    import ApiCall from "../../../../utilities/api-call";
    import LoadingData from "../../../../utilities/loading_data";

    function MaintenanceRequestForm ({type, isLoading, user, fetchRequest}){
        const [isSubmitting , setIsSubmitting ] = useState(false); 
        const [responseData , setResponseData ] = useState(''); 
        

        if (isLoading || !type || type.length === 0 || type.message) {
            return (
            <LoadingData
                title="Make A Request"
                data={type}
                isLoading={isLoading}
                col={6}
            />
            );
        }

        const handleSubmit = async (e) => {
            e.preventDefault(); // Prevent default form submission
            setIsSubmitting(true);
        
            // Get input field values
            const user_id = user.id;
            const maintenance_type_id = e.target.maintenance_type_id.value;
            const description = e.target.description.value;
            const property_id = user.latest_agreement.property_id;
        
            // Define the method, URL, and data
            const method = 'POST';
            const endpoint = `maintenance/request`;
            const payload = { user_id, maintenance_type_id, description, property_id};  
        
            // Call the Ajax function and update the state with the response
            setResponseData(await ApiCall({method, endpoint, payload}));    
            setIsSubmitting(false)
            e.target.reset();
            fetchRequest();
        };


            

        return (
            <div className="card border-0 shadow col-6 p-4">
                <div className="card-header bg-dark text-white">
                    <h5>Make A Request</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-control" id="maintenance_type_id" name="maintenance_type_id">
                            {type.map(item => 
                                <option key={item.id} value={item.id}>
                                    {item?.type}
                                </option>
                            )}
                        </select>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="description" className="form-label">Note</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="State the issue you are having"
                        />
                        </div>
                        {isSubmitting ? (
                        <button className="btn btn-primary w-100" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="visually-hidden">Submitting...</span>
                        </button>
                        ) : (
                        <button className="btn btn-primary w-100" type="submit">
                            Submit
                        </button>
                        )}
                    </form>
                    {responseData.message && (
                        <div className="mt-3 alert alert-danger">
                        {responseData.message}
                        </div>
                    )}
                </div>

        </div>
        );
    }
    export default MaintenanceRequestForm