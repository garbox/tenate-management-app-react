function PaymentInfoCard({ user }) {
    console.log(user);
    
    return (
        <>
            <div class="card shadow p-4 border-0 col-6">
                <div class="card-header bg-dark text-white">
                    <h5>Payment Information</h5>
                </div>
                <div class="card-body">
                    <div className="mb-3">
                        <h6 className="text-muted">Tenant Details</h6>
                        <p className="mb-1"><strong>Name:</strong> John Doe</p>
                        <p className="mb-1">
                            <strong>Unit Address: </strong> <br/>   
                            {user?.latest_agreement?.property?.address} <br/> {user?.latest_agreement?.property?.city}, <br/>{user?.latest_agreement?.property?.zip} <br/>{user?.latest_agreement?.property?.state?.name}
                        </p>
                        <p><strong>Lease Period:</strong> {user?.latest_agreement?.start_date} - {user?.latest_agreement?.end_date}</p>
                    </div>

                    <div className="mb-3">
                        <h6 className="text-muted">Payment Summary</h6>
                        <div className="d-flex justify-content-between">
                            <span>Rent</span>
                            <span>${user?.latest_agreement?.rent / 100}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold">
                            <span>Total Due</span>
                            <span>${user?.latest_agreement?.rent / 100}</span>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h6 className="text-muted">Payment Date</h6>
                        <p className="mb-0">Current month, pulls from rent scheduel</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentInfoCard;
