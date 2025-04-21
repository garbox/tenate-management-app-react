import React from 'react';

function Profile() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="container mt-5">
      <h2>Hello, {user.name}</h2>
    </div>
  );
}

export default Profile;
