import React, { useState, useEffect } from 'react';
import ApiCall from '../../../../../utilities/api-call';

function RoleSelection({ roleId, roles, userId }) {
  const [loading, setLoading] = useState(true); // State for loading
  const [safeRoles, setSafeRoles] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user.token;

  useEffect(() => {
    if (Array.isArray(roles) && roles.length > 0) {
      setSafeRoles(roles);
      setLoading(false); // Set loading to false when roles data is ready
    }
  }, [roles]);

  const handleRoleChange = async (event) => {
    const selectedRoleId = parseInt(event.target.value);

    const endpoint = `/user/${userId}/role`;
    const method = 'PUT';
    const payload = {
      user_id: userId,
      role_id: selectedRoleId,
    };

    try {
      const response = await ApiCall({method, endpoint, payload, token});

      if (response.message) {
        console.log(response.message);
      }
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  if (loading) {
    return <div>Loading roles...</div>; // Optional loading message or spinner
  }

  return (
    <div>
      <select
        className="form-control"
        onChange={handleRoleChange}
        defaultValue={roleId}
      >
        {safeRoles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RoleSelection;
