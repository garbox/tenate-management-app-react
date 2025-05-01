import { useEffect, useState } from "react";
import ApiCall from "../../../utilities/api-call";
import CurrentMaintenenaceRequest from "./components/current_maintenance_request";
import MaintenanceRequestCard from "./components/maintenance_request_card";

function MaintenanceRequestTenate (){
    const [responseData, setResponseData] = useState('');
    const [typeData, setTypeData] = useState('');
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [isLoading, setIsLoading] = useState(true);
    const token = user.token;

    const fetchRequest = async () => {
        const method = 'GET';
        const endpoint = `maintenance/request/user/${user.id}`;
        setResponseData(await ApiCall({ method, endpoint, token, setIsLoading}))
      };

    useEffect(() => {
        const fetchTypeData = async () => {
            const method = 'GET';
            const endpoint = `/maintenance/type`;
            setTypeData(await ApiCall({ method, endpoint, token, setIsLoading}))
        
        };
      
        fetchRequest();
        fetchTypeData();
      }, []);

    return (
        <>
        <div className="container mt-5" >
            <div className="row">
                <MaintenanceRequestCard type={typeData} isLoading={isLoading} user={user} fetchRequest={fetchRequest}/>
                <CurrentMaintenenaceRequest isLoading={isLoading} responseData={responseData}/>
            </div>
        </div>
        </>
    );
}
export default MaintenanceRequestTenate

