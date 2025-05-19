import React, { useState } from "react";
import MonthToMonth from "./addendums/month_to_month";
import LeadPaintAddendum from "./addendums/lead_paint";
import NonRenewalAddendum from "./addendums/non_renewal";
import LateFeeAddendum from "./addendums/late_fee";
import MaintenanceAddendum from "./addendums/maintenance";
import PetAddendum from "./addendums/pet";

function LeaseForm({ tenant }) {
  const [showAmendments, setShowAmendments] = useState({
    pet: false,
    maintenance: false,
    lateFee: false,
    nonRenewal: false,
    leadPaint: false,
  });

  const [petsAllowed, setPetsAllowed] = useState(null); // State to track if pets are allowed


  const toggleAmendment = (key) => {
    setShowAmendments((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePetsAllowedChange = (event) => {
    setPetsAllowed(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.target).entries()
    );
    // add UI‑only state too
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Create Rental Agreement</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Tenant</label>
                  <select className="form-control" name='tenant' id="tenant">
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
                  <label className="form-label">Start Date</label>
                  <input type="date" name="stateDate" id="stateDate" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input type="date" name="endDate" id="endDate" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Rent</label>
                  <input type="number" name="rent" id="rent" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Deposit</label>
                  <input type="number" name="deposit" id="deposit" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Application Fee</label>
                  <input type="number" name="applicationFee" id="applicationfee" className="form-control" placeholder="e.g., $50" />
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
        </div>
      </div>
    </div>
  );
}

export default LeaseForm;
