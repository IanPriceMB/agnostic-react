import React from 'react';
import { Link } from 'react-router-dom';
import { useUserAction } from '../../hooks';
import './index.scss';

export default () => {
  const { setUser } = useUserAction();
  
  const handleUserClick = () => setUser({ userType: 'user' });
  const handleAdminClick = () => setUser({ userType: 'admin' });
  const handlesuperAdminClick = () => setUser({ userType: 'super-admin' });

  return (
    <div className="sign-in">
      <Link to="/users" >
        <button onClick={handleUserClick}>User</button>
      </Link>
      <Link to="/users" >
        <button onClick={handleAdminClick}>Admin</button>
      </Link>
      <Link to="/users" >
        <button onClick={handlesuperAdminClick}>Super Admin</button>
      </Link>
    </div>
  );
}