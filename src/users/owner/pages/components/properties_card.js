import { Link } from "react-router-dom";
import LoadingData from "../../../../utilities/loading_data";

function PropertiesCard({ propertyData, isLoading }) {
    if (isLoading || !propertyData || propertyData.length === 0 || propertyData.message) {
        return (
            <LoadingData
                title="Your Properties"
                data={propertyData}
                isLoading={isLoading}
                col={12}
            />
        );
    }
    console.log(propertyData);
    
    return (
        <>
            <div className="card border-0 shadow p-4">
                <div className="card-header bg-dark text-light">
                    <h5>Your Properties</h5>
                </div>
                <div className="card-body">
                    <table className="table table-striped  table-border">
                        <thead className="thead-dark">
                            <tr>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Occupied</th>
                                <th>Rent Value</th>
                                <th colSpan={2}>Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {propertyData.properties.map((property, index) => (
                                <tr key={property.id}>
                                    <td>{property.address}{property.unit && `, Unit ${property.unit}`}</td>
                                    <td>{property.city}</td>
                                    <td>{property.state.name}</td>
                                    <td style={{ color: property.active_agreement ? 'green' : 'red' }}>
                                        {property.active_agreement ? "Yes" : "No"}
                                    </td>
                                    <td>
                                        {property.active_agreement ? `$${(property.active_agreement.rent / 100).toFixed(2)}` : 'N/A'}
                                    </td>
                                    <td>{property.zip}</td>
                                    <td>
                                        <Link to={`/owner/property/${property?.id}`}
                                            className="btn btn-sm btn-primary">
                                            View
                                        </Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default PropertiesCard;