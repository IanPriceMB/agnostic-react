import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useUserStore } from '../../hooks';

export default ({ users }) => {
  const match = useRouteMatch();
  const user = useUserStore();
  return (
  <ul>
    {users && users.map(({ userName, userId, userType }) => (
      <li key={userName}>
        <ul>
          <li key={userName}>{userName}</li>
          <li key={userId}>{userId}</li>
          <li key={userType}>{userType}</li>
          {(user.userType === 'admin' || user.userType === 'superAdmin') && (
            <>
            <li key={`${match.url}/update/${userId}`}>
              <Link to={`${match.url}/update/${userId}`}>
                <button>Update</button>
              </Link>
            </li>
            <li key={`${match.url}/delete/${userId}`}>
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