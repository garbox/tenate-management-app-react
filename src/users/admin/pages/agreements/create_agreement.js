import { useEffect, useState } from "react";
import LeaseForm from "./componenets/lease_form";
import ApiCall from "../../../../utilities/api-call";

function CreateAgreement() {
    const [tenant, setTenant] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;
    
    useEffect(() => {
        const fetchData = async () => {
            const method = 'GET';
            const endpoint = 'user/byrole/3';
            setTenant(await ApiCall({ method, endpoint, token, setIsLoading }))
            
        };

        fetchData();
    }, []);   

    return (
        <>
            <LeaseForm tenant={tenant} />
        </>
    )
}
export default CreateAgreement;