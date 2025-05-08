import { Link } from 'react-router-dom';

function NaviChange({ user, onUserChange }) {

  const handleLogout = () => {
    if (onUserChange) {
      onUserChange(null);
    }
  };

  const renderRoleSpecificLinks = () => {
    if (!user) return null;

    switch (user.role_id) {
      case 1: // Admin
        return (
          <>
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/admin">Admin Dashboard</Link></li>
            <li><Link className="dropdown-item" to="/admin/users">Manage Users</Link></li>
            <li><Link className="dropdown-item" to="/admin/agreements">Agreements</Link></li>
            <li><Link className="dropdown-item" to="/admin/properties">Properties</Link></li>
            <li><Link className="dropdown-item" to="/admin/mainteince/all">Maintenance Requests</Link></li>
          </>
        );
      case 2: // Maintenance
        return (
          <>
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/maintience/reports">Maintenance Request</Link></li>
            <li><Link className="dropdown-item" to="/maintience/jobs">Your Jobs</Link></li>
          </>
        );
      case 3: // Tenant
        return (
          <>
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/tenate/payment">Payments</Link></li>
            <li><Link className="dropdown-item" to="/tenate/maintenance/request">Maintenance Requests</Link></li>
          </>
        );
      case 4: // Property Owner
        return (
          <>
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/owner/properties">Properties</Link></li>
            <li><Link className="dropdown-item" to="/owner/reports">Reports</Link></li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {user ? (
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle active"
            to="#"
            id="userDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hello, {user.name}
          </Link>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            {renderRoleSpecificLinks()}
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
}

export default NaviChange;
