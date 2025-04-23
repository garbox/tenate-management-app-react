import { Link } from 'react-router-dom';
import LoadingData from '../../../../../utilities/loading_data';

function AgreementCard ({agreement, isLoading}){

  if (isLoading || !agreement || agreement.length === 0 || agreement.message) {
    return (
      <LoadingData
        title="Agreements"
        data={agreement}
        isLoading={isLoading}
        col={12}
      />
    );
  }
      
    return (
        <>
        <div className="card col-12 border-0">
            <div className="card-header bg-dark text-light">                
                <h5>Agreement</h5>
            </div>
            <div className='card-body'>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
          <thead className="table">
            <tr>
              <th>Deposit</th>
              <th>Rent</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${agreement.security_deposit/100}</td>
              <td>${agreement.rent/100}</td>
              <td>{agreement.start_date}</td>
              <td>{agreement.end_date}</td>
                <td className="text-end">
                  <Link
                  to={`/agreement/contract/${agreement.file_name}`}
                  className="btn btn-sm btn-primary">
                  View Contract
                  </Link>
                </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
        </div>
        </>
    )

}

export default AgreementCard;