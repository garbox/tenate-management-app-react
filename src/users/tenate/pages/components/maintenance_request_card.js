import MaintenanceRequestForm from "./maintenance_request_form";

function MaintenanceRequestCard ({type, isLoading, user, fetchRequest}){

    return (
        <MaintenanceRequestForm type={type} isLoading={isLoading} user={user} fetchRequest={fetchRequest} />
    );
}
export default MaintenanceRequestCard