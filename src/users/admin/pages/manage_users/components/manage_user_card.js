import React, { useState } from 'react';
import RoleSelection from './role_selection';
import LoadingData from "../../../../../utilities/loading_data";


function ManageUserCard({ data, roles, isLoading }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading || !data || data.length === 0 ||  data.message) {
    return (
      <LoadingData
        title="All Users"
        data={data}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="card col-12 border-0">
      <div className="card-header bg-dark text-white d-flex justify-content-between">
        <h5>All Users</h5>
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search Name or Email"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </form>
      </div>
      <div className="card-body bg-light">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name || 'N/A'}</td>
                    <td>{user.email || 'N/A'}</td>
                    <td>
                      <RoleSelection
                        roleId={user.role_id}
                        roles={roles}
                        userId={user.id}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUserCard;
