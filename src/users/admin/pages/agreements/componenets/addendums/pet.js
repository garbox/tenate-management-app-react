function PetAddendum({ showAmendments, toggleAmendment, petsAllowed, handlePetsAllowedChange}) {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="petAddendum"
                    checked={showAmendments.pet}
                    onChange={() => toggleAmendment("pet")}
                />
                <label className="form-check-label" htmlFor="petAddendum">
                    Pet Addendum (as per Texas Law)
                </label>
            </div>
            {showAmendments.pet && (
                <div className="ps-4 mt-2">
                    <div className="mb-2">
                        <label className="form-label">Are Pets Allowed?</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="petsAllowedYes"
                                name="petsAllowed"
                                value="yes"
                                checked={petsAllowed === "yes"}
                                onChange={handlePetsAllowedChange}
                            />
                            <label className="form-check-label" htmlFor="petsAllowedYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="petsAllowedNo"
                                name="petsAllowed"
                                value="no"
                                checked={petsAllowed === "no"}
                                onChange={handlePetsAllowedChange}
                            />
                            <label className="form-check-label" htmlFor="petsAllowedNo">
                                No
                            </label>
                        </div>
                    </div>

                    {petsAllowed === "yes" && (
                        <div className="mt-2">
                            <div className="mb-2">
                                <label className="form-label">Allowed Pets</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g., cats, dogs under 25 lbs"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Pet Deposit</label>
                                <input type="number" name="petDesposit" id="petDesposit" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Monthly Pet Rent</label>
                                <input type="number" name="petRent" id="petRent" className="form-control" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
export default PetAddendum;