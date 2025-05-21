import { useState } from "react";
import MonthToMonth from "./addendums/month_to_month";
import LeadPaintAddendum from "./addendums/lead_paint";
import NonRenewalAddendum from "./addendums/non_renewal";
import LateFeeAddendum from "./addendums/late_fee";
import MaintenanceAddendum from "./addendums/maintenance";
import PetAddendum from "./addendums/pet";
import LoadingData from "../../../../../utilities/loading_data";


function LeaseForm({ tenant, properties, handleSubmit, responseData, isLoading }) {

  console.log(responseData);
  
  const [showAmendments, setShowAmendments] = useState({
    pet: false,
    maintenance: false,
    lateFee: false,
    nonRenewal: false,
    leadPaint: false,
  });
  const [petsAllowed, setPetsAllowed] = useState(null);

  if (isLoading || !properties || properties.length === 0 || properties.message || !tenant || tenant.length === 0 || tenant.message) {
    return (
      <LoadingData
        title="Create Rental Agreement"
        data={properties}
        isLoading={isLoading}
        col={12}
      />
    );
  }

  const toggleAmendment = (key) => {
    setShowAmendments((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePetsAllowedChange = (event) => {
    setPetsAllowed(event.target.value);
  };

  return (
    <div className="card shadow p-4 border-0">
      <div className="card-header bg-dark text-white">
        <h5>Create Rental Agreement</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Tenant</label>
                <select className="form-control" name='agreement.tenant_id' id="agreement.tenant_id ">
                  <option>Select Tenant</option>
                  {Array.isArray(tenant) && tenant.length > 0 ? (
                    tenant.map((tenantItem, index) => (
                      <option key={index} value={tenantItem.id}>
                        {tenantItem?.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No tenants available</option>
                  )}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Property</label>
                <select className="form-control" name="agreement.property_id" id="agreement.property_id">
                  <option>Select Property</option>
                  {properties.map((property) =>
                    <option key={property.id} value={property.id}>{property.address} {property.city}, {property.unit && <>Unit {property.unit},</>} {property.state.name}</option>
                  )}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input type="date" name="agreement.start_date" id="agreement.start_date" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">End Date</label>
                <input type="date" name="agreement.end_date" id="agreement.end_date" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Rent</label>
                <input type="number" name="agreement.rent" id="agreement.rent" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Deposit</label>
                <input type="number" name="agreement.security_deposit" id="agreement.security_deposit" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Application Fee</label>
                <input type="number" name="agreement.application_fee" id="agreement.application+_fee" className="form-control" placeholder="e.g., $50" />
              </div>
            </div>

            {/* Right Column - Amendments */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Lease Amendments</label>

                <PetAddendum
                  handlePetsAllowedChange={handlePetsAllowedChange}
                  petsAllowed={petsAllowed}
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

                <MaintenanceAddendum
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

                <LateFeeAddendum
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

                <NonRenewalAddendum
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

                <LeadPaintAddendum
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

                <MonthToMonth
                  showAmendments={showAmendments}
                  toggleAmendment={toggleAmendment} />

              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create
          </button>
        </form>
        {responseData && (
          responseData.message ? (
            <div className="mt-3 alert alert-danger">
              {responseData.message}
            </div>
          ) : (
            <div className="mt-3 alert alert-success">
             Operation completed successfully.
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default LeaseForm;
