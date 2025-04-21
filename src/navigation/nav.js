import { Link, useNavigate } from 'react-router-dom';
import NavChange from './components/nav-change';

function Nav({ user, onUserChange }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Property Management</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span className="border-start border-light mx-2" style={{ height: '24px' }}></span>
            </li>
            <NavChange user={user} onUserChange={onUserChange} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;