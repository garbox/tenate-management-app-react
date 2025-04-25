function LoadingData({ title, data, isLoading, col = 12, checkEmpty }) {
  // While loading
  if (isLoading) {
    return (
      <>
      <div className={`card col-${col} border-0 shadow p-4`}>
        <div className="card-header bg-dark text-white ">
          <h5>{title}</h5>
        </div>
        <div className="card-body text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      </>
    );
  }

  // If there's an error message
  if (data && data.message) {
    return (
      <>
      <div className={`card col-${col} border-0 shadow p-4`}>
        <div className="card-header bg-dark text-white">
          <h5>{title}</h5>
        </div>
        <div className="card-body text-center">
          <p className="alert alert-danger">{data.message}</p>
        </div>
      </div>
      </>
    );
  }

  // If data is empty (custom check if provided)
  const isEmpty = checkEmpty ? checkEmpty(data) : !data || data.length === 0;

  if (isEmpty) {
    return (
      <>
      <div className={`card col-${col} border-0 shadow p-4`}>
        <div className="card-header bg-dark text-white">
          <h5>{title}</h5>
        </div>
        <div className="card-body text-center">
          <p className="alert alert-info">No data available.</p>
        </div>
      </div>
      </>
    );
  }

  return null; // Let the parent component render the actual content
}

export default LoadingData;
