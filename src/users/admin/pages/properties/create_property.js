import { useEffect, useState } from "react";
import CreatePropertyForm from "./componenets/create_property_form";
import ApiCall from "../../../../utilities/api-call";

function CreateProperty() {

    const [responseData, setResponseData] = useState('');
    const [ownerData, setOwnerData] = useState('');
    const [stateData, setStateData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    useEffect(() => {
        const fetchOwnerData = async () => {
            const method = 'GET';
            const endpoint = 'user/byrole/4';
            setOwnerData(await ApiCall({ method, endpoint, token, setIsLoading }));
        };

        const fetchStateData = async () => {
            const method = 'GET';
            const endpoint = 'state';
            
            setStateData(await ApiCall({ method, endpoint, token, setIsLoading }));
        };

        fetchOwnerData();
        fetchStateData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const method = 'POST';
        const endpoint = 'property';
        const payload = {
            address: form.address.value,
            unit: form.unit.value,
            city: form.city.value,
            state_id: form.state_id.value,
            zip: form.zip.value,
            owner_id: form.owner_id.value
        };        
        setResponseData(await ApiCall({ method, endpoint, token, payload, setIsLoading }));
        form.reset();
        
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <CreatePropertyForm state={stateData} responseData={responseData} owner={ownerData} isLoading={isLoading} handleSubmit={handleSubmit} />
                </div>
            </div>
        </>
    );
}
export default CreateProperty;