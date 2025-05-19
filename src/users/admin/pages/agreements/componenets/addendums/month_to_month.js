function MonthToMonth({showAmendments, toggleAmendment}) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="monthToMonthAddendum"
                    checked={showAmendments.monthToMonth}
                    onChange={() => toggleAmendment("monthToMonth")}
                />
                <label className="form-check-label" htmlFor="monthToMonthAddendum">
                    Month-to-Month Addendum
                </label>
            </div>
            {showAmendments.monthToMonth && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Rent Amount</label>
                        <input type="number" name="monthToMonth" id="monthToMonth" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Notice Period for Moving Out (in days)</label>
                        <input type="number" name="m2mNotice" id="m2mNotice" className="form-control" />
                    </div>
                </div>
            )}
        </>
    )
}
export default MonthToMonth