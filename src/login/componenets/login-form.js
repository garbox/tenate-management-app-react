import React from 'react';

function LoginForm ({ handleSubmit, responseData, isSubmitting }) {
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            {isSubmitting ?   
              <button className="btn btn-primary w-100" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually"> Authenticating ...</span>
              </button>
              : 
              <button type="submit" className="btn btn-primary w-100">Login</button>
            }
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

export default LoginForm;