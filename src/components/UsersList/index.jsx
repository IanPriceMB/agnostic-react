import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default ({ users, user }) => {
  let match = useRouteMatch();
  return (
  <ul>
    {users && users.map(({ userName, userId, userType }) => (
      <li>
        <ul>
          <li key={userName}>{userName}</li>
          <li key={userId}>{userId}</li>
          <li key={userType}>{userType}</li>
          {(user._userType === 'admin' || user._userType === 'superAdmin') && (
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