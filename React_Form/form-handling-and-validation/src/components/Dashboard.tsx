import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const user = useSelector((state) => state.user.username);

  return (
    <>
      <div className='login-container text-center font-semibold text-3xl'>Admin Dashboard</div>
      <p>Hello, {user} </p>

    </>
  );
};

export default Dashboard;
