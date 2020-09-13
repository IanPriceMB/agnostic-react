import React from 'react';

export default ({ user }) => {
  return (
    <div>
      <div>Users</div>
      {user._userType === 'admin' ||
      user._userType === 'superAdmin' && (
        <div>Admins</div>
      )}
      {user._userType === 'superAdmin' && (
        <div>Super Admins</div>
      )}
    </div>
  )
}