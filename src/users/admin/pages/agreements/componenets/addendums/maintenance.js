function MaintenanceAddendum({showAmendments, toggleAmendment }) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="maintenanceAddendum"
                    checked={showAmendments.maintenance}
                    onChange={() => toggleAmendment("maintenance")}
                />
                <label className="form-check-label" htmlFor="maintenanceAddendum">
                    Maintenance Responsibilities (as per Texas Law)
                </label>
            </div>
            {showAmendments.maintenance && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Tenant Responsibilities</label>
                        <textarea name="maintenance.tenant_responsibilities" id="tenant_responsibilities" className="form-control" rows="2" placeholder="e.g., yard care, pest control"></textarea>
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Landlord Responsibilities</label>
                        <textarea name="maintenance.land_lord_responsibilities" id="land_lord_responsibilities" className="form-control" rows="2" placeholder="e.g., HVAC, structural repairs"></textarea>
                    </div>
                </div>
            )}
        </>
    )
}
export default MaintenanceAddendum