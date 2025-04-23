import MaintenanceReport from "./componenets/maintenance_reports";
import PaymentReport from "./componenets/payment_reports";
import AgreementReports from "./componenets/agreement_reports";

function AdminDashboard () {

    return (
    <div className='container mt-5'>
        <div className='row'>
            <MaintenanceReport />
            <AgreementReports />
            <PaymentReport />
        </div>
    </div>
    );
}
export default AdminDashboard;