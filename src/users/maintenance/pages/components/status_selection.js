import { useState } from "react";
import ApiCall from "../../../../utilities/api-call";


function StatusSelection({data, maintStatusData, isLoading, user}){    
    const [isSuccessful, setIsSuccessful] = useState(false);
    //make sure data is loading and dosnt try to load data before its avaliable. 
    if (isLoading || !maintStatusData || maintStatusData.length === 0) {
        return null;
    }
    
    const handleOnChange = async (e) =>{
        const method = 'PUT';
        const endpoint = `maintenance/request/${data.id}`;
        const token = user.token;
        const maintenance_status_id = e.target.value;
        const payload = {maintenance_status_id};
        
        const responseData = await ApiCall({ method, endpoint, payload, token });

        if(responseData === 1){
            setIsSuccessful(true)
            setTimeout(() => setIsSuccessful(false), 2000);
        }        
      };

    return (
        <form>
            <div className="d-flex align-items-center gap-2">
            <select 
            onChange={handleOnChange} 
            className="form-control" 
            defaultValue={data?.status?.id}>

                {maintStatusData.map((maintStatus) =>
                    <option 
                        key={maintStatus.id} 
                        value={maintStatus.id}>
                            {maintStatus.name}
                    </option>
                )}
            </select>
            {isSuccessful && <i className="bi bi-check-circle-fill text-success"></i>}
            </div>
        </form>
    );
}
export default StatusSelection;