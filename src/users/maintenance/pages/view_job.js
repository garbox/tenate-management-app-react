import React, { useEffect, useState } from "react";
import ApiCall from "../../../utilities/api-call";
import ViewJobTable from "./components/view_job_table";
import { useParams } from 'react-router-dom';
import ShowExpensesCard from "./components/show_expenses_card";
import ExpensesCardForm from "./components/exspense_card_form";

function ViewJob() {
  const [responseData, setResponseData] = useState('');
  const [typeData, setTypeData] = useState('');
  const [maintStatusData, setMaintStatusData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;
  
  const fetchData = async () => {
    const method = 'GET';
    const endpoint = `maintenance/request/${id}`;
    setResponseData(await ApiCall({ method, endpoint, token, setIsLoading}))      
  };

  useEffect(() => {
    const fetchTypeData = async () => {
        const method = 'GET';
        const endpoint = `/maintenance/type`;
        setTypeData(await ApiCall({ method, endpoint, token, setIsLoading}))
      };

      const fetchMaintStaus = async () =>{
        const method = 'GET';
        const endpoint = `/maintenance/status`;
        setMaintStatusData(await ApiCall({ method, endpoint, token, setIsLoading}))
      };
  
    fetchData();
    fetchMaintStaus();
    fetchTypeData();
  }, []);

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <ViewJobTable
          data={responseData}
          type={typeData}
          isLoading={isLoading}
          maintStatusData={maintStatusData}
        />
      </div>
    </div>
    <div className="container mt-5">
    <div className="row">
        <ShowExpensesCard  
          expensesData={responseData.expenses} 
          isLoading={isLoading}
        />
        <ExpensesCardForm  
          type={typeData} 
          isLoading={isLoading} 
          maintId={id} 
          user={user} 
          onSubmit={fetchData}
        />   
      </div>
      </div>
    </>
  );
}

export default ViewJob;
