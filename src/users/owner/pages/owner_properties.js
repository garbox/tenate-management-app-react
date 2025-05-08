import { useEffect, useState } from "react";
import ApiCall from "../../../utilities/api-call";
import PropertiesCard from "./components/properties_card";

function OwnerProperties() {
    const [propertyData, setPropertyData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    useEffect(() => {
        const fetchProperties = async () => {
            const method = 'GET';
            const endpoint = `owner/${user.id}`;
            setPropertyData(await ApiCall({ method, endpoint, token, setIsLoading }))
        };

        fetchProperties();
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <PropertiesCard propertyData={propertyData} isLoading={isLoading} />
                </div>
            </div>
        </>
    );
}
export default OwnerProperties;