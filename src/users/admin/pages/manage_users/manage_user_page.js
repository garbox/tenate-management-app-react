import React, { useState, useEffect } from 'react';
import ApiCall from '../../../../utilities/api-call';
import ManageUserCard from './components/manage_user_card';


function ManageUserPage({ onUserChange }) {
    const [userResponseData, setUserResponseData] = useState('');
    const [roleResponseData, setRoleResponseData] = useState('');
    const [isLoading, setIsLoading] = useState('true');
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    useEffect(() => {
        const fetchUsersData = async () => {
            const method = 'GET';
            const endpoint = '/user'; // Replace with your API endpoint
            setResponseData(await ApiCall({ method, endpoint, token, setIsLoading }));
        };

        const fetchRoleData = async () => {
            const method = 'GET';
            const endpoint = '/role'; // Replace with your API endpoint


            try {
                const response = await ApiCall({ method, endpoint, token });
                if (response.message) {
                    setRoleResponseData(response);
                }
                else {
                    setRoleResponseData(response);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setRoleResponseData('Failed to fetch data.');
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchUsersData();
        fetchRoleData();
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <ManageUserCard data={userResponseData} roles={roleResponseData} isLoading={isLoading} />
            </div>
        </div>
    );
}

export default ManageUserPage;