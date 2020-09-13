import React from 'react';

export default ({ users }) => (
  <ul>
    {users && users.map(({ userName, userId, userType }) => (
      <li>
        <ul>
          <li key={userName}>{userName}</li>
          <li key={userId}>{userId}</li>
          <li key={userType}>{userType}</li>
        </ul>
      </li>
      ))}
  </ul>
);