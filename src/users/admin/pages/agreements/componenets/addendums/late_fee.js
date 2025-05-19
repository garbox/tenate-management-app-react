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
                />
                <label className="form-check-label" htmlFor="lateFeeAddendum">
                    Late Fee & Grace Period (as per Texas Law)
                </label>
            </div>
            {showAmendments.lateFee && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Grace Period (days)</label>
                        <input type="number" name="gracePeriod" id="gracePeriod" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Late Fee ($ or %)</label>
                        <input type="text" name="lateFee" id="lateFee" className="form-control" placeholder="e.g., $50 or 5%" />
                    </div>
                </div>
            )}
        </>
    )
}
export default LateFeeAddendum