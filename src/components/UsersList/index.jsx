import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useUserStore } from '../../hooks';
import './index.scss';

export default ({ users }) => {
  const match = useRouteMatch();
  const user = useUserStore();
  return (
  <ul className="user-list">
    {users && [...users].sort((a, b)  => a.userName > b.userName ? 1 : -1).map(({ userName, userId, userType }) => (
      <li key={userName} className="user-list__row">
        <ul className="user-list__row-list">
          <li className="user-list__row-item" key={userName}>{userName}</li>
          <li className="user-list__row-item" key={userId}>{userId}</li>
          <li className="user-list__row-item" key={userType}>{userType}</li>
          {(user.userType === 'admin' || user.userType === 'super-admin') && (
            <>
            <li className="user-list__row-item" key={`${match.url}/update/${userId}`}>
              <Link to={`${match.url}/update/${userId}`}>
                <button>Update</button>
              </Link>
            </li>
            <li className="user-list__row-item" key={`${match.url}/delete/${userId}`}>
              <Link to={`${match.url}/delete/${userId}`}>
                <button>Delete</button>
              </Link>
            </li>
            </>
          )}
        </ul>
      </li>
      ))}
  </ul>
);
}