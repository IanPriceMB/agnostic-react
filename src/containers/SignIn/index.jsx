import React from 'react';
import { Link } from 'react-router-dom';
import { useUserAction } from '../../hooks';
import './index.scss';

export default () => {
  const { setUser } = useUserAction();
  
  const handleUserClick = () => setUser({ userType: 'user' });
  const handleAdminClick = () => setUser({ userType: 'admin' });
  const handleSuperAdminClick = () => setUser({ userType: 'superAdmin' });

  return (
    <div className="sign-in">
      <Link to="/users" >
        <button onClick={handleUserClick}>User</button>
      </Link>
      <Link to="/users" >
        <button onClick={handleAdminClick}>Admin</button>
      </Link>
      <Link to="/users" >
        <button onClick={handleSuperAdminClick}>Super Admin</button>
      </Link>
    </div>
  );
}