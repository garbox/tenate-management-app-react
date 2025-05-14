import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PropertyCard from "./componenets/property_card";
import AgreementCard from "./componenets/agreement_card";
import TenateCard from "./componenets/tenate_card";
import OwnerCard from "./componenets/owner_card";
import ApiCall from "../../../../utilities/api-call";

function ShowAgreement() {
    const { id } = useParams(); // Extract the ID from the URL
    const [responseData, setResponseData] = useState('');
    const [isLoading, setIsLoading] = useState('true');
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    useEffect(() => {
        const fetchData = async () => {
            const method = 'GET';
            const endpoint = `agreement/${id}`;
            setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }));
        };

        fetchData();
    }, [id]);


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <PropertyCard property={responseData?.property} isLoading={isLoading} />
                    <TenateCard tenate={responseData?.user} isLoading={isLoading} />
                    <OwnerCard owner={responseData?.property.owner} isLoading={isLoading} />
                    <AgreementCard agreement={responseData} isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}

export default ShowAgreement;