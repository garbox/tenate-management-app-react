import React from 'react';

function RegisterForm ({ handleSubmit, responseData })  {
  
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Register</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name='name'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                name='email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailConfirm" className="form-label">Confirm Email</label>
              <input
                type="email"
                className="form-control"
                id="emailConfirm"
                placeholder="Confirm your email"
                name='emailConfirm'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                name='passwrod'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirm" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                placeholder="Confirm your password"
                name='passwordConfirm'
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          {responseData && (
            <div className="mt-3 alert alert-danger">
              {responseData}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;