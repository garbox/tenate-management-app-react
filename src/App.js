import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navigation/nav';
import Home from './home/home';
import LoginPage from './login/login';
import RegisterPage from './register/register';
import Profile from './profile/profile';
import Properties from './users/admin/pages/properties/properties';
import ShowProperty from './users/admin/pages/properties/show-property';
import MaintenanceAll from './users/admin/pages/maintenance/maintenance_all';
import ManageUserPage from './users/admin/pages/manage_users/manage_user_page';
import AdminDashboard from './users/admin/pages/admin_dashboard/admin_dashboard';
import MaintenanceRequest from './users/admin/pages/maintenance/maintenance_request';
import AllAgreements from './users/admin/pages/agreements/all_agreements';
import ShowAgreement from './users/admin/pages/agreements/show_agreement';
import MaintenanceRequestAvaliable from './users/maintenance/pages/maintenance_request_avaliable';
import Middleware from './utilities/middleware';
import YourJobs from './users/maintenance/pages/your_jobs';
import ViewJob from './users/maintenance/pages/view_job';

function App() {
  const [user, setUser] = useState(null);

  // Load user from sessionStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleUserChange = (newUser) => {
    setUser(newUser);
    if (newUser) {
      sessionStorage.setItem('user', JSON.stringify(newUser));
    } 
    else {
      sessionStorage.removeItem('user');
    }
  };

  return (
    <Router>
        <Nav user={user} onUserChange={handleUserChange} />
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={<LoginPage onUserChange={handleUserChange} />} />
            <Route path="/register" element={<RegisterPage onUserChange={handleUserChange}/>} />

            <Route element={<Middleware />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin/properties" element={<Properties />} />
                <Route path="/admin/property/:id" element={<ShowProperty />} />
                <Route path="/admin/mainteince/all" element={<MaintenanceAll />} />
                <Route path="/admin/users" element={<ManageUserPage onUserChange={handleUserChange} />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/maintenance/request/:id" element={< MaintenanceRequest />} />
                <Route path="/admin/agreements" element={<AllAgreements />} />
                <Route path="/admin/agreements/:id" element={<ShowAgreement />} />
                <Route path="/maintience/reports" element={<MaintenanceRequestAvaliable />} />
                <Route path="/maintience/jobs" element={<YourJobs />} />
                <Route path="/maintience/job/:id" element={<ViewJob />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;