import React, { useState, useEffect } from 'react';import AgreementTable from "./componenets/agreements_table";
import ApiCall from "../../../../utilities/api-call";

function AllAgreements (){
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsloading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

    useEffect(() => {
        const fetchData = async () => {
          const method = 'GET';
          const endpoint = 'agreement';
          try {
            const response = await ApiCall({method, endpoint, token});
            response.message ? setResponseData(response) : setResponseData(response);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          finally {
            setIsloading(false);
          }
        };
    
        fetchData();
      }, []); 

      return (
          <>
          <div className='container mt-5'>
            <AgreementTable data={responseData} isLoading={isLoading}/>
          </div>
          </>
      )

}

export default AllAgreements;