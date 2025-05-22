function LateFeeAddendum({ showAmendments, toggleAmendment }) {
    return (
        <>
            {/* Late Fee Addendum */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="lateFeeAddendum"
                    checked={showAmendments.lateFee}
                    onChange={() => toggleAmendment("lateFee")}
                    required
                />
                <label className="form-check-label" htmlFor="lateFeeAddendum">
                    Late Fee & Grace Period (as per Texas Law)
                </label>
            </div>
            {showAmendments.lateFee && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Grace Period (days)</label>
                        <input type="number" name="agreement.grace_period" id="agreement.grace_period" className="form-control" required/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Late Fee ($ or %)</label>
                        <input type="text" name="agreement.late_fee" id="agreement.late_fee" className="form-control" placeholder="e.g., $50 or 5%" required/>
                    </div>
                </div>
            )}
        </>
    )
}
export default LateFeeAddendum