import React, { useState, useEffect } from 'react'; import AgreementTable from "./componenets/agreements_table";
import ApiCall from "../../../../utilities/api-call";

function AllAgreements() {
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      const method = 'GET';
      const endpoint = 'agreement';
      setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }))
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <AgreementTable data={responseData} isLoading={isLoading} />
        </div>
      </div>
    </>
  )

}

export default AllAgreements;