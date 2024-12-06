import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearUser } from '../slices/userSlice';
import {Breadcrumbs, Link} from '@mui/joy'; 

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogOut = () => {
    dispatch(clearUser()); 
    localStorage.removeItem("username");
    navigate("/login"); 
  };

  const createBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x); // Split path into segments
    return pathnames.map((path, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Generate the full path up to the current segment
      return { label: path.charAt(0).toUpperCase() + path.slice(1), to }; // Capitalize first letter for label
    });
  };

  const breadcrumbs = createBreadcrumbs();

  return (
    <>
            <Breadcrumbs>
        <Link href="/">Home</Link> {/* Always add Home as the first breadcrumb */}
        {breadcrumbs.map((breadcrumb, index) => (
          <Link key={index} href={breadcrumb.to}>
            {breadcrumb.label}
          </Link>
        ))}
      </Breadcrumbs>

      <div className="login-container text-center font-semibold text-3xl">
        Admin Dashboard
      </div>
      <button
        onClick={handleLogOut}
        className="logout-button bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
