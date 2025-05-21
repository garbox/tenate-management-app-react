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
                        <input type="number" name="m2m.month_to_month_rent" id="m2m.month_to_month_rent" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Notice Period for Moving Out (in days)</label>
                        <input type="number" name="m2m.notice" id="m2m.notice" className="form-control" />
                    </div>
                </div>
            )}
        </>
    )
}
export default MonthToMonth