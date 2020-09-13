import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../redux/user/actions';
import './index.scss';

export default () => {
  const dispatch = useDispatch();
  
  const handleUserClick = () => { dispatch(setUser({ userType: 'user' })) };
  const handleAdminClick = () => { dispatch(setUser({ userType: 'admin' })) };
  const handleSuperAdminClick = () => { dispatch(setUser({ userType: 'superAdmin' })) };

  return (
    <div className="sign-in">
      <Link to="/users" >
        <button
          onClick={handleUserClick}
        >
          User
        </button>
      </Link>
      <Link to="/users" >
        <button
          onClick={handleAdminClick}
        >
          Admin
        </button>
      </Link>
      <Link to="/users" >
        <button
          onClick={handleSuperAdminClick}
        >
          Super Admin
        </button>
      </Link>
    </div>
  );
}