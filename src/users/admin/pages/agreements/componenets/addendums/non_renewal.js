function NonRenewalAddendum({ showAmendments, toggleAmendment }) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="nonRenewalAddendum"
                    checked={showAmendments.nonRenewal}
                    onChange={() => toggleAmendment("nonRenewal")}
                />
                <label className="form-check-label" htmlFor="nonRenewalAddendum">
                    Non-Renewal Notice (30 days required per Texas Law)
                </label>
            </div>
            {showAmendments.nonRenewal && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Non-Renewal Notice Period</label>
                        <input type="number" name="noticeRenewal" id="noticeRenewal" className="form-control" value={30} disabled />
                    </div>
                </div>
            )}
        </>
    )
}
export default NonRenewalAddendum;