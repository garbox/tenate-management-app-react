import PendingAgreements from "./componenets/pending_agreements";
import MaintenanceReport from "./componenets/maintenance_reports";
import PaymentReport from "./componenets/payment_reports";

function AdminDashboard () {

    return (
    <div className='container mt-5'>
        <div className='row'>
            <MaintenanceReport />
            <PendingAgreements />
            <PaymentReport />
        </div>
    </div>
    );
}
export default AdminDashboard;