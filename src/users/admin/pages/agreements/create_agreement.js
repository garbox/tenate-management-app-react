import { useEffect, useState } from "react";
import LeaseForm from "./componenets/lease_form";
import ApiCall from "../../../../utilities/api-call";

function CreateAgreement() {
    const [tenant, setTenant] = useState('');
    const [responseData, setResponseData] = useState('');
    const [property, setProperty] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    const [showAmendments, setShowAmendments] = useState({
        pet: false,
        maintenance: false,
        lateFee: false,
        nonRenewal: false,
        leadPaint: false,
    });

    const [petsAllowed, setPetsAllowed] = useState(null);

    useEffect(() => {
        const fetchTenantData = async () => {
            const method = 'GET';
            const endpoint = 'user/byrole/3';
            setTenant(await ApiCall({ method, endpoint, token, setIsLoading }))

        };

        const fetchPropertyData = async () => {
            const method = 'GET';
            const endpoint = 'property';
            setProperty(await ApiCall({ method, endpoint, token, setIsLoading }))

        };

        fetchTenantData();
        fetchPropertyData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = {};

        for (const [key, value] of formData.entries()) {
            key.split('.').reduce((acc, part, i, arr) => {
                return acc[part] ??= i === arr.length - 1 ? value : {};
            }, payload);
        }

        const method = "POST";
        const endpoint = "agreement";
        setResponseData(await ApiCall({ method, endpoint, token, payload, setIsLoading }));

    };
    return (
        <>
            <div className="container mt-5">
                <LeaseForm tenant={tenant} properties={property} handleSubmit={handleSubmit} isLoading={isLoading} responseData={responseData} />
            </div>
        </>
    )
}
export default CreateAgreement;