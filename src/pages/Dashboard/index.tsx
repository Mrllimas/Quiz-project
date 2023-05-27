import { Link } from 'react-router-dom';
import './style.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user';

const Dashboard = () => {
  const { signOut } = useContext(UserContext);

  return (
    <div className="dashboard-box">
      <h1 className="dashboard-title">Welcome to the quiz! Test your knowledge in English.</h1>

      <div className="link-container">
        <Link to="/game">Play</Link>
      </div>
      <div className="logout" onClick={() => signOut()}>
        Logout
      </div>
    </div>
  );
};

export default Dashboard;
