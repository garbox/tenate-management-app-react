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
                                name="pet.pets_allowed"
                                value="1"
                                checked={petsAllowed === "1"}
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
                                name="pet.pets_allowed"
                                value="0"
                                checked={petsAllowed === "0"}
                                onChange={handlePetsAllowedChange}
                            />
                            <label className="form-check-label" htmlFor="petsAllowedNo">
                                No
                            </label>
                        </div>
                    </div>

                    {petsAllowed === "1" && (
                        <div className="mt-2">
                            <div className="mb-2">
                                <label className="form-label">Allowed Pets</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g., cats, dogs under 25 lbs"
                                    name="pet.requirement"
                                    id="requirement"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Pet Deposit</label>
                                <input type="number" name="pet.pet_deposit" id="pet.pet_deposit" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Monthly Pet Rent</label>
                                <input type="number" name="pet.pet_monthly_rate" id="pet.pet_monthly_rate" className="form-control" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
export default PetAddendum;