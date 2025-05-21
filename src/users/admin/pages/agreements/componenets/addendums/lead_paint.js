function LeadPaintAddendum({ showAmendments, toggleAmendment }) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="leadPaintAddendum"
                    checked={showAmendments.leadPaint}
                    onChange={() => toggleAmendment("leadPaint")}
                />
                <label className="form-check-label" htmlFor="leadPaintAddendum">
                    Lead-Based Paint Disclosure (Required for homes built before 1978)
                </label>
            </div>
            {showAmendments.leadPaint && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Is the property built before 1978?</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="lead_paint.built_before_1978"
                                value='1'
                            />
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="lead_paint.built_before_1978"
                                value="0"
                            />
                            <label className="form-check-label">No</label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Provide Lead-Based Paint Pamphlet</label>
                        <input type="file" className="form-control" />
                    </div>
                </div>
            )}
        </>
    )
}
export default LeadPaintAddendum